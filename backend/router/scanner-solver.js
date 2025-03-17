const express = require('express');
const router = express.Router();
const Cube = require('cubejs'); // 引入 cube.js 库

// 定义需要的顺序
const requiredOrder = ['White', 'Blue', 'Red', 'Yellow', 'Green', 'Orange'];

// 定义颜色到魔方面标签的映射
const colorToFaceMap = {
    'White': 'U',
    'Blue': 'R',
    'Red': 'F',
    'Yellow': 'D',
    'Green': 'L',
    'Orange': 'B'
};

// 初始化魔方求解器
Cube.initSolver();

router.post('/', (req, res) => {
    const scanData = req.body; // 从前端接收的 JSON 数据

    // 创建新对象并按照指定顺序排列键
    const orderedData = {};
    requiredOrder.forEach(key => {
        if (scanData[key]) {
            orderedData[key] = scanData[key];
        }
    });

    // 替换键和值
    const replacedData = {};
    for (const [color, face] of Object.entries(colorToFaceMap)) {
        if (orderedData[color]) {
            // 替换值中的颜色为魔方面标签
            replacedData[face] = orderedData[color].map(value => colorToFaceMap[value] || value);
        }
    }

    // 打印替换后的数据
    console.log("Replaced data:");
    console.log(JSON.stringify(replacedData, null, 2));

    // 将所有值拼接成一个由 54 个字符组成的字符串
    const cubeString = Object.values(replacedData).flat().join('');
    console.log("Cube string (54):", cubeString);

    // 使用 cube.js 创建魔方实例并求解
    try {
        console.log("Starting cube:", cubeString);
        const cube = Cube.fromString(cubeString); // 从字符串创建魔方实例
        console.log("Generating Solution");
        const solution = cube.solve(); // 求解魔方
        console.log("Solution:", solution);
        // 返回成功响应和解决方案
        res.status(200).json({ success: true, message: 'Cube solved successfully!', solution });
    } catch (error) {
        console.error("Error solving the cube:", error);
        res.status(500).json({ success: false, message: 'Failed to solve the cube.', error: error.message });
    }
});

module.exports = router;