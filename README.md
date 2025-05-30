# ArcartX Shimmer UI
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Apache%202.0-green.svg)

## 概述
- ArcartX Shimmer UI是一个为ArcartX开发者设计的VSCode扩展，
- 旨在简化ArcartX UI的YAML配置工作。
- 通过提供智能代码片段和自动补全功能，帮助开发者快速构建复杂的用户界面。

## 功能特点
- ✨ 基于YAML高亮配置 + 混合Shimmer脚本语法高亮配置
- 🧠 上下文感知的ArcartX UI YAML代码片段补全
- 📝 Shimmer代码补全 + 上下文变量感知
- 🔄 控件创建自动生成唯一ID和时间戳
- 🎨 控件结构模板化，快速构建复杂UI

## 安装方法
1. 打开VSCode
2. 转到扩展视图（`Ctrl+Shift+X`）
3. 搜索"ArcartX Shimmer UI"
4. 点击安装

## 使用方法
1. 打开或创建一个YAML文件
2. 右下角选择"ArcartX UI YAML"语言模式
3. YAML补全方式:  输入`?` 或者`/`触发 ArcartX UI 的YAML片段补全
4. Shimmer脚本补全生效位置:
```YAML
# 单行代码模式【使用YAML语法的'|'文本块模式】
# 此处注意 以这种方式只为了激活Shimmer代码高亮和补全，请不要在此编写多行代码
# 因为YAML读取时会将其视为单行
codeSingle: |
    Message.chat('123')
# 多行代码模式【使用YAML语法的'|-'文本块模式】
codeMultiple: |-
    Message.chat('123')
    Message.chat('123')
```
   

## 致谢
- YAML语法高亮配置基于[vscode-yaml](https://github.com/redhat-developer/vscode-yaml)，基于MIT协议

## 问题反馈
- 如果你遇到任何问题或有功能建议，请在GitHub仓库提交issue：
- [https://github.com/ArcartXProject/vscode-arcartx-ui-yaml/issues](https://github.com/ArcartXProject/vscode-arcartx-ui-yaml/issues)

## 版权和许可
- Copyright (c) 2025 17Artist.  
- 根据Apache License 2.0协议发布。

