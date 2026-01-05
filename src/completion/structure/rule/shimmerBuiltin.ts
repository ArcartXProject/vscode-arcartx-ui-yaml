import * as vscode from 'vscode';

// Shimmer 内置对象函数补全
export const builtin_functions = [
    // === Shimer 核心函数 ===
    {
        label: 'Shimmer.print()',
        detail: '控制台输出（不换行）',
        insertText: 'print(${1:value})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 控制台输出\n\n' +
            '在控制台输出内容，**不会自动换行**。多次调用会紧挨着输出。\n\n' +
            '**参数**:\n' +
            '- `value` - 要输出的内容\n\n' +
            '**返回值**: 无\n\n' +
            '---\n\n' +
            '**示例**:\n' +
            '```shimmer\n' +
            'Shimmer.print("Hello")\n' +
            'Shimmer.print(" World")\n' +
            '```\n' +
            '输出: `Hello World`（不换行）'
        )
    },
    {
        label: 'Shimmer.println()',
        detail: '控制台输出（换行）',
        insertText: 'println(${1:text})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 控制台输出并换行\n\n' +
            '在控制台输出指定文本内容，**输出后自动换行**。\n\n' +
            '**参数**:\n' +
            '- `text` - 要输出的文本内容\n\n' +
            '**返回值**: 无\n\n' +
            '---\n\n' +
            '**示例**:\n' +
            '```shimmer\n' +
            'Shimmer.println("Hello")\n' +
            'Shimmer.println("World")\n' +
            '```\n' +
            '输出:\n' +
            '```\n' +
            'Hello\n' +
            'World\n' +
            '```'
        )
    },
    // === Math 数学运算 ===
    { label: 'Math.abs()', detail: '取绝对值', insertText: 'abs(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**取绝对值**\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.acos()', detail: '反余弦值', insertText: 'acos(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反余弦值**\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.asin()', detail: '反正弦值', insertText: 'asin(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反正弦值**\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.atan()', detail: '反正切值', insertText: 'atan(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反正切值**\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.atan2()', detail: 'y/x的反正切值', insertText: 'atan2(${1:y}, ${2:x})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**y/x的反正切值**\n\n参数: y, x (数字)\n返回值: 数字') },
    { label: 'Math.cbrt()', detail: '立方根', insertText: 'cbrt(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**立方根**\n\n参数: target (数字)\n返回值: 数字\n\n示例: `cbrt(8)` → `2`') },
    { label: 'Math.ceil()', detail: '向上取整', insertText: 'ceil(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**向上取整**（大于等于目标的最小整数）\n\n参数: target (数字)\n返回值: 数字\n\n示例: `ceil(4.2)` → `5`') },
    { label: 'Math.cos()', detail: '余弦值', insertText: 'cos(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**余弦值**\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.floor()', detail: '向下取整', insertText: 'floor(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**向下取整**（小于等于目标的最大整数）\n\n参数: target (数字)\n返回值: 数字\n\n示例: `floor(4.8)` → `4`') },
    { label: 'Math.max()', detail: '最大值', insertText: 'max(${1:a}, ${2:b})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**最大值**\n\n参数: a, b (数字)\n返回值: 数字\n\n示例: `max(5, 3)` → `5`') },
    { label: 'Math.min()', detail: '最小值', insertText: 'min(${1:a}, ${2:b})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**最小值**\n\n参数: a, b (数字)\n返回值: 数字\n\n示例: `min(5, 3)` → `3`') },
    { label: 'Math.pi()', detail: '圆周率π', insertText: 'pi()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**圆周率 π**\n\n返回值: `3.141592653589793`') },
    { label: 'Math.random()', detail: '随机数', insertText: 'random()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**随机数**\n\n返回一个 0-1 之间的随机数\n返回值: 数字') },
    { label: 'Math.sin()', detail: '正弦值', insertText: 'sin(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**正弦值**\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.sqrt()', detail: '平方根', insertText: 'sqrt(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**平方根**\n\n参数: target (数字)\n返回值: 数字\n\n示例: `sqrt(4)` → `2`') },
    { label: 'Math.tan()', detail: '正切值', insertText: 'tan(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**正切值**\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.toDegrees()', detail: '弧度转角度', insertText: 'toDegrees(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**弧度转角度**\n\n参数: target (数字，弧度)\n返回值: 数字（角度）\n\n示例: `toDegrees(π/2)` → `90`') },
    { label: 'Math.toRadians()', detail: '角度转弧度', insertText: 'toRadians(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**角度转弧度**\n\n参数: target (数字，角度)\n返回值: 数字（弧度）\n\n示例: `toRadians(90)` → `1.5707...`') },
    { label: 'Math.ulp()', detail: 'ULP值', insertText: 'ulp(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**ULP值**（Unit in the Last Place）\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.signum()', detail: '符号函数', insertText: 'signum(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**符号函数**\n\n返回数字的符号：正数返回1，负数返回-1，零返回0\n\n示例: `signum(-5)` → `-1`') },
    { label: 'Math.rint()', detail: '最近整数', insertText: 'rint(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**最近整数**\n\n参数: target (数字)\n返回值: 数字\n\n示例: `rint(4.5)` → `4`') },
    { label: 'Math.round()', detail: '四舍五入', insertText: 'round(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**四舍五入**\n\n参数: target (数字)\n返回值: 数字\n\n示例: `round(4.5)` → `5`') },
    { label: 'Math.log()', detail: '自然对数', insertText: 'log(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**自然对数**（以e为底）\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.log10()', detail: '常用对数', insertText: 'log10(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**常用对数**（以10为底）\n\n参数: target (数字)\n返回值: 数字\n\n示例: `log10(100)` → `2`') },
    { label: 'Math.log1p()', detail: 'ln(1+x)', insertText: 'log1p(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**ln(1+x)**\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.exp()', detail: '指数值', insertText: 'exp(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**指数值**（e的x次方）\n\n参数: target (数字)\n返回值: 数字\n\n示例: `exp(1)` → `2.718...`') },
    { label: 'Math.expm1()', detail: 'e^x-1', insertText: 'expm1(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**e^x - 1**\n\n参数: target (数字)\n返回值: 数字') },
    { label: 'Math.getExponent()', detail: '指数部分', insertText: 'getExponent(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取指数部分**\n\n参数: target (数字)\n返回值: 数字\n\n示例: `getExponent(1024)` → `10`') },
    { label: 'Math.hypot()', detail: '斜边长度', insertText: 'hypot(${1:x}, ${2:y})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**斜边长度**（sqrt(x² + y²)）\n\n参数: x, y (数字)\n返回值: 数字\n\n示例: `hypot(3, 4)` → `5`') },
    { label: 'Math.nextAfter()', detail: '下一个浮点数', insertText: 'nextAfter(${1:start}, ${2:direction})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**下一个浮点数**\n\n从start向direction移动的下一个浮点数') },
    { label: 'Math.nextUp()', detail: '略大的浮点数', insertText: 'nextUp(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**大于目标的下一个浮点数**') },
    { label: 'Math.nextDown()', detail: '略小的浮点数', insertText: 'nextDown(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**小于目标的下一个浮点数**') },
    { label: 'Math.copySign()', detail: '复制符号', insertText: 'copySign(${1:magnitude}, ${2:sign})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**复制符号**\n\n返回带有sign符号的magnitude\n\n示例: `copySign(5, -1)` → `-5`') },
    { label: 'Math.scalb()', detail: '缩放', insertText: 'scalb(${1:target}, ${2:scaleFactor})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**缩放**（target × 2^scaleFactor）\n\n示例: `scalb(2, 3)` → `16`') },
    { label: 'Math.sinh()', detail: '双曲正弦', insertText: 'sinh(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**双曲正弦值**') },
    { label: 'Math.cosh()', detail: '双曲余弦', insertText: 'cosh(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**双曲余弦值**') },
    { label: 'Math.tanh()', detail: '双曲正切', insertText: 'tanh(${1:target})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**双曲正切值**') },
    { label: 'Math.pow()', detail: '幂运算', insertText: 'pow(${1:base}, ${2:exponent})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**幂运算**（base的exponent次方）\n\n参数: base, exponent (数字)\n返回值: 数字\n\n示例: `pow(2, 3)` → `8`') },
    { label: 'Math.IEEEremainder()', detail: 'IEEE余数', insertText: 'IEEEremainder(${1:dividend}, ${2:divisor})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**IEEE 754标准余数**') },
    // === String 字符串操作 ===
    // === 判断操作 ===
    { label: 'String.contains()', detail: '判断是否包含指定内容', insertText: 'contains(${1:otherText})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断是否包含指定内容**\n\n参数: otherText (文本)\n返回值: 布尔\n\n示例: `\'一段文本\'.contains(\'文本\')` → `true`') },
    { label: 'String.equals()', detail: '判断是否等于', insertText: 'equals(${1:otherText})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断是否等于**\n\n参数: otherText (文本)\n返回值: 布尔\n\n示例: `\'一段文本\'.equals(\'一段文本\')` → `true`') },
    { label: 'String.equalsIgnoreCase()', detail: '忽略大小写判断是否等于', insertText: 'equalsIgnoreCase(${1:otherText})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**忽略大小写判断是否等于**\n\n参数: otherText (文本)\n返回值: 布尔') },
    { label: 'String.endsWith()', detail: '判断是否以指定后缀结尾', insertText: 'endsWith(${1:suffix})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断是否以指定后缀结尾**\n\n参数: suffix (文本)\n返回值: 布尔\n\n示例: `\'一段文本\'.endsWith(\'文本\')` → `true`') },
    { label: 'String.startsWith()', detail: '判断是否以指定前缀开头', insertText: 'startsWith(${1:prefix})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断是否以指定前缀开头**\n\n参数: prefix (文本)\n返回值: 布尔\n\n示例: `\'一段文本\'.startsWith(\'一段\')` → `true`') },
    { label: 'String.startsWith(from)', detail: '判断是否以指定前缀开头（从索引）', insertText: 'startsWith(${1:prefix}, ${2:toffset})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**从指定索引判断是否以指定前缀开头**\n\n参数: prefix (文本), toffset (整数)\n返回值: 布尔\n\n示例: `\'一段文本\'.startsWith(\'段\', 1)` → `true`') },
    { label: 'String.isEmpty()', detail: '判断是否为空', insertText: 'isEmpty()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断是否为空**\n\n返回值: 布尔\n\n示例: `\'.isEmpty()` → `true`') },
    // === 大小写转换 ===
    { label: 'String.toLowerCase()', detail: '转换为小写', insertText: 'toLowerCase()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**转换为小写**\n\n返回值: 文本') },
    { label: 'String.toUpperCase()', detail: '转换为大写', insertText: 'toUpperCase()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**转换为大写**\n\n返回值: 文本') },
    // === 替换操作 ===
    { label: 'String.replace()', detail: '替换内容', insertText: 'replace(${1:target}, ${2:replacement})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**替换内容**\n\n参数: target, replacement (文本)\n返回值: 文本\n\n示例: `\'一段文本\'.replace(\'文本\', \'内容\')` → `\'一段内容\'`') },
    { label: 'String.replaceAll()', detail: '使用正则替换所有', insertText: 'replaceAll(${1:regex}, ${2:replacement})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**使用正则替换所有**\n\n参数: regex, replacement (文本)\n返回值: 文本') },
    { label: 'String.replaceFirst()', detail: '使用正则替换第一个', insertText: 'replaceFirst(${1:regex}, ${2:replacement})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**使用正则替换第一个匹配项**\n\n参数: regex, replacement (文本)\n返回值: 文本') },
    // === 拆分操作 ===
    { label: 'String.split()', detail: '拆分为列表', insertText: 'split(${1:regex})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**使用正则拆分为列表**\n\n参数: regex (文本)\n返回值: 列表\n\n示例: `\'一段文本\'.split(\'段\')` → `[\'一\', \'文本\']`') },
    { label: 'String.split(limit)', detail: '拆分并限制数量', insertText: 'split(${1:regex}, ${2:limit})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**拆分并限制数量**\n\n参数: regex (文本), limit (整数)\n返回值: 列表') },
    // === 长度与子串 ===
    { label: 'String.length()', detail: '获取文本长度', insertText: 'length()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取文本长度**\n\n返回值: 整数\n\n示例: `\'一段文本\'.length()` → `4`') },
    { label: 'String.substring()', detail: '获取子字符串', insertText: 'substring(${1:beginIndex})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取子字符串**（从指定索引开始）\n\n参数: beginIndex (整数)\n返回值: 文本\n\n示例: `\'一段文本\'.substring(1)` → `\'段文本\'`') },
    { label: 'String.substring(end)', detail: '获取子字符串（带结束索引）', insertText: 'substring(${1:beginIndex}, ${2:endIndex})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取子字符串**（指定开始和结束索引）\n\n参数: beginIndex, endIndex (整数)\n返回值: 文本\n\n示例: `\'一段文本\'.substring(1, 3)` → `\'段文\'`') },
    // === 查找索引 ===
    { label: 'String.indexOf()', detail: '获取子字符串第一个索引', insertText: 'indexOf(${1:substring})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取子字符串第一个索引**\n\n参数: substring (文本)\n返回值: 整数（未找到返回-1）\n\n示例: `\'一段文本\'.indexOf(\'文本\')` → `2`') },
    { label: 'String.indexOf(from)', detail: '获取索引（从指定位置）', insertText: 'indexOf(${1:substring}, ${2:fromIndex})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取索引（从指定位置开始）**\n\n参数: substring (文本), fromIndex (整数)\n返回值: 整数') },
    { label: 'String.lastIndexOf()', detail: '获取子字符串最后索引', insertText: 'lastIndexOf(${1:substring})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取子字符串最后一个索引**\n\n参数: substring (文本)\n返回值: 整数（未找到返回-1）\n\n示例: `\'一段文本\'.lastIndexOf(\'文本\')` → `2`') },
    { label: 'String.lastIndexOf(from)', detail: '获取最后索引（从指定位置）', insertText: 'lastIndexOf(${1:substring}, ${2:fromIndex})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取最后索引（从指定位置开始）**\n\n参数: substring (文本), fromIndex (整数)\n返回值: 整数\n\n示例: `\'一段文本\'.lastIndexOf(\'文本\', 1)` → `-1`') },
    // === Number 数字操作 ===
    {
        label: 'Number.round()',
        detail: '小数位数限制（取整）',
        insertText: 'round()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 小数位数限制（取整）\n\n' +
            '**参数**: 无\n\n' +
            '**返回值**: 数字\n\n' +
            '---\n\n' +
            '**示例**:\n' +
            '```shimmer\n' +
            '123.456.round()\n' +
            '```\n' +
            '返回: `123`'
        )
    },
    {
        label: 'Number.round(x)',
        detail: '小数位数限制（保留指定位数）',
        insertText: 'round(${1:x})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 小数位数限制（保留指定小数位数）\n\n' +
            '**参数**:\n' +
            '- `x` - 要保留的小数位数\n\n' +
            '**返回值**: 数字\n\n' +
            '---\n\n' +
            '**示例**:\n' +
            '```shimmer\n' +
            '123.456.round(2)\n' +
            '```\n' +
            '返回: `123.46`'
        )
    },
    // === List 列表操作 ===
    // === 添加元素 ===
    { label: 'List.add()', detail: '添加元素到列表', insertText: 'add(${1:element})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**添加元素到列表末尾**\n\n参数: element (对象)\n返回值: 无\n\n示例: `[].add(\'元素\')`') },
    { label: 'List.add(index)', detail: '在指定位置添加元素', insertText: 'add(${1:index}, ${2:element})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**在指定索引位置添加元素**\n\n参数: index (整数), element (对象)\n返回值: 无') },
    { label: 'List.addAll()', detail: '添加所有元素', insertText: 'addAll(${1:collection})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**将集合中所有元素添加到列表**\n\n参数: collection (集合)\n返回值: 布尔') },
    // === 获取元素 ===
    { label: 'List.get()', detail: '获取指定索引元素', insertText: 'get(${1:index})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取指定索引位置的元素**\n\n参数: index (整数)\n返回值: 对象\n\n示例: `[\'abc\',\'元素\'].get(1)` → `\'元素\'`') },
    { label: 'List.subList()', detail: '获取子列表', insertText: 'subList(${1:fromIndex}, ${2:toIndex})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取子列表（不含结束索引）**\n\n参数: fromIndex, toIndex (整数)\n返回值: 列表\n\n示例: `[\'a\',\'b\',\'c\',\'d\'].subList(1, 3)` → `[\'b\', \'c\']`') },
    // === 移除元素 ===
    { label: 'List.remove()', detail: '移除指定元素', insertText: 'remove(${1:element})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**移除首次出现的指定元素**\n\n参数: element (对象)\n返回值: 布尔（是否移除成功）') },
    { label: 'List.removeIndex()', detail: '移除指定索引元素', insertText: 'removeIndex(${1:index})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**移除指定索引的元素**\n\n参数: index (整数)\n返回值: 对象（被移除的元素）') },
    { label: 'List.removeAll()', detail: '移除所有指定元素', insertText: 'removeAll(${1:collection})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**移除集合中包含的所有元素**\n\n参数: collection (集合)\n返回值: 布尔') },
    { label: 'List.retainAll()', detail: '仅保留指定元素', insertText: 'retainAll(${1:collection})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**仅保留与集合相同的元素**\n\n参数: collection (集合)\n返回值: 布尔') },
    { label: 'List.clear()', detail: '清空列表', insertText: 'clear()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**清空列表，移除所有元素**\n\n返回值: 无') },
    // === 设置元素 ===
    { label: 'List.set()', detail: '设置指定位置元素', insertText: 'set(${1:index}, ${2:element})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置指定位置的元素**\n\n参数: index (整数), element (对象)\n返回值: 对象（原来的元素）') },
    // === 查找操作 ===
    { label: 'List.indexOf()', detail: '获取元素首次索引', insertText: 'indexOf(${1:element})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取元素首次出现的索引**\n\n参数: element (对象)\n返回值: 整数') },
    { label: 'List.lastIndexOf()', detail: '获取元素最后索引', insertText: 'lastIndexOf(${1:element})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取元素最后出现的索引**\n\n参数: element (对象)\n返回值: 整数') },
    // === 判断操作 ===
    { label: 'List.contains()', detail: '判断是否包含元素', insertText: 'contains(${1:element})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断是否包含指定元素**\n\n参数: element (对象)\n返回值: 布尔') },
    { label: 'List.containsAll()', detail: '判断是否包含所有元素', insertText: 'containsAll(${1:collection})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断是否包含集合中所有元素**\n\n参数: collection (集合)\n返回值: 布尔') },
    { label: 'List.isEmpty()', detail: '判断是否为空', insertText: 'isEmpty()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断列表是否为空**\n\n返回值: 布尔\n\n示例: `[\'a\',\'b\'].isEmpty()` → `false`') },
    // === 其他操作 ===
    { label: 'List.size()', detail: '获取列表大小', insertText: 'size()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取列表元素数量**\n\n返回值: 整数\n\n示例: `[\'a\',\'b\'].size()` → `2`') },
    // === Map 字典操作 ===
    // === 获取和设置 ===
    { label: 'Map.get()', detail: '获取键对应的值', insertText: 'get(${1:key})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取键对应的值**\n\n参数: key (对象)\n返回值: 对象\n\n示例: `{\'key\': \'value\'}.get(\'key\')` → `\'value\'`') },
    { label: 'Map.put()', detail: '添加键值对', insertText: 'put(${1:key}, ${2:value})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**添加键值对**\n\n参数: key, value (对象)\n返回值: 对象（返回上次put的值）\n\n示例: `{\'key\': \'value\'}.put(\'key\', \'value2\')` → `\'value\'`') },
    { label: 'Map.putAll()', detail: '添加所有键值对', insertText: 'putAll(${1:map})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**将Map中所有键值对添加**\n\n参数: map (Map类型)\n返回值: 无') },
    { label: 'Map.putIfAbsent()', detail: '键不存在时添加', insertText: 'putIfAbsent(${1:key}, ${2:value})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**键不存在时添加键值对**\n\n参数: key (文本), value (对象)\n返回值: 对象（原来值或null）') },
    { label: 'Map.getOrDefault()', detail: '获取值或默认值', insertText: 'getOrDefault(${1:key}, ${2:defaultValue})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取键对应的值，不存在返回默认值**\n\n参数: key (文本), defaultValue (对象)\n返回值: 对象\n\n示例: `{}.getOrDefault(\'key\', \'default\')` → `\'default\'`') },
    // === 移除操作 ===
    { label: 'Map.remove()', detail: '移除键值对', insertText: 'remove(${1:key})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**移除键对应的键值对**\n\n参数: key (对象)\n返回值: 对象（被移除的值）') },
    { label: 'Map.clear()', detail: '清空Map', insertText: 'clear()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**清空所有键值对**\n\n返回值: 无') },
    // === 判断操作 ===
    { label: 'Map.containsKey()', detail: '判断是否包含键', insertText: 'containsKey(${1:key})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断是否包含指定键**\n\n参数: key (对象)\n返回值: 布尔\n\n示例: `{\'key\': \'value\'}.containsKey(\'key\')` → `true`') },
    { label: 'Map.isEmpty()', detail: '判断是否为空', insertText: 'isEmpty()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断Map是否为空**\n\n返回值: 布尔\n\n示例: `{\'key\': \'value\'}.isEmpty()` → `false`') },
    // === 获取键和值 ===
    { label: 'Map.keys()', detail: '获取所有键', insertText: 'keys()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取所有键组成的列表**\n\n返回值: 列表\n\n示例: `{\'key1\': \'v1\', \'key2\': \'v2\'}.keys()` → `[\'key1\', \'key2\']`') },
    { label: 'Map.values()', detail: '获取所有值', insertText: 'values()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取所有值组成的列表**\n\n返回值: 列表\n\n示例: `{\'key1\': \'v1\', \'key2\': \'v2\'}.values()` → `[\'v1\', \'v2\']`') },
    // === 其他操作 ===
    { label: 'Map.size()', detail: '获取Map大小', insertText: 'size()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取键值对数量**\n\n返回值: 整数\n\n示例: `{\'key\': \'value\'}.size()` → `1`') },
    // === UUID 标识符 ===
    {
        label: 'UUID()',
        detail: '创建随机UUID',
        insertText: 'UUID()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 创建随机UUID\n\n' +
            '**参数**: 无\n\n' +
            '**返回值**: UUID对象\n\n' +
            '---\n\n' +
            '**示例**:\n' +
            '```shimmer\n' +
            'UUID()\n' +
            '```\n' +
            '生成类似: `123e4567-e89b-12d3-a456-426614174000`'
        )
    },
    {
        label: 'UUID(string)',
        detail: '通过字符串创建UUID',
        insertText: 'UUID(${1:uuidString})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 通过字符串创建UUID\n\n' +
            '**参数**:\n' +
            '- `uuidString` - UUID字符串\n\n' +
            '**返回值**: UUID对象（字符串无效时生成随机UUID）\n\n' +
            '---\n\n' +
            '**示例**:\n' +
            '```shimmer\n' +
            'UUID(\'123e4567-e89b-12d3-a456-426614174000\')\n' +
            '```'
        )
    },
    {
        label: 'UUID.getMostSignificantBits()',
        detail: '获取最高有效位',
        insertText: 'getMostSignificantBits()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取最高有效位\n\n' +
            '**参数**: 无\n\n' +
            '**返回值**: 长整型'
        )
    },
    {
        label: 'UUID.getLeastSignificantBits()',
        detail: '获取最低有效位',
        insertText: 'getLeastSignificantBits()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取最低有效位\n\n' +
            '**参数**: 无\n\n' +
            '**返回值**: 长整型'
        )
    },
    {
        label: 'UUID.version()',
        detail: '获取UUID版本号',
        insertText: 'version()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取UUID版本号\n\n' +
            '**参数**: 无\n\n' +
            '**返回值**: 整数\n\n' +
            '常见版本: 3(MD5), 4(随机), 5(SHA-1)'
        )
    },
    {
        label: 'UUID.variant()',
        detail: '获取UUID变体号',
        insertText: 'variant()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取UUID变体号\n\n' +
            '**参数**: 无\n\n' +
            '**返回值**: 整数'
        )
    },
    // === Animation 动画插值 ===
    // === Lerp 线性插值 ===
    { label: 'Lerp()', detail: '线性插值', insertText: 'Lerp(${1:start}, ${2:end}, ${3:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**线性插值** - 平滑过渡数值\n\n参数: start(数值), end(数值), transferTime(毫秒)\n\n示例: `Lerp(0, 100, 1000)` - 1秒内从0到100') },
    { label: 'Lerp.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**\n\n返回值: 数值') },
    { label: 'Lerp.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Lerp.reverse()', detail: '反转插值方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转插值方向**') },
    // === Back 回弹动画 ===
    { label: 'Back()', detail: '回弹动画插值', insertText: 'Back(${1:start}, ${2:end}, ${3:overshoot}, ${4:type}, ${5:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**回弹动画插值**\n\n参数: start, end, overshoot(建议1.70158), type(0=渐入,1=渐出,2=渐入渐出), transferTime\n\n示例: `Back(0, 100, 1.70158, 0, 1000)`') },
    { label: 'Back.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**\n\n返回值: 数值') },
    { label: 'Back.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Back.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Bezier 贝塞尔曲线 ===
    { label: 'Bezier()', detail: '贝塞尔曲线插值', insertText: 'Bezier(${1:start}, ${2:end}, ${3:x1}, ${4:y1}, ${5:x2}, ${6:y2}, ${7:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**贝塞尔曲线插值**\n\n参数: start, end, x1, y1, x2, y2(0-1), transferTime\n\n预设曲线:\n- ease: (0.25, 0.1, 0.25, 1.0)\n- easeIn: (0.42, 0, 1.0, 1.0)\n- easeOut: (0, 0, 0.58, 1.0)\n- easeInOut: (0.42, 0, 0.58, 1.0)') },
    { label: 'Bezier.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**\n\n返回值: 数值') },
    { label: 'Bezier.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Bezier.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Bounce 弹跳动画 ===
    { label: 'Bounce()', detail: '弹跳动画插值', insertText: 'Bounce(${1:start}, ${2:end}, ${3:bounces}, ${4:decay}, ${5:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**弹跳动画插值**\n\n参数: start, end, bounces(弹跳次数), decay(衰减系数0-1), transferTime\n\n示例: `Bounce(0, 100, 3, 0.5, 1000)` - 弹跳3次，每次衰减50%') },
    { label: 'Bounce.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**\n\n返回值: 数值') },
    { label: 'Bounce.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Bounce.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === CircX/CircY 圆周运动 ===
    { label: 'CircX()', detail: '圆周运动X坐标', insertText: 'CircX(${1:centerX}, ${2:centerY}, ${3:radius}, ${4:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**圆周运动X坐标**\n\n参数: centerX, centerY, radius, transferTime\n\n示例: `CircX(100, 100, 50, 1000)` - 以(100,100)为圆心，半径50') },
    { label: 'CircY()', detail: '圆周运动Y坐标', insertText: 'CircY(${1:centerX}, ${2:centerY}, ${3:radius}, ${4:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**圆周运动Y坐标**\n\n参数: centerX, centerY, radius, transferTime\n\n示例: `CircY(100, 100, 50, 1000)` - 配合CircX使用实现圆周运动') },
    { label: 'CircX.get()', detail: '获取当前X坐标', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前X坐标**') },
    { label: 'CircY.get()', detail: '获取当前Y坐标', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前Y坐标**') },
    { label: 'CircX.reset()', detail: '重置动画', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置动画状态**') },
    { label: 'CircY.reset()', detail: '重置动画', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置动画状态**') },
    { label: 'CircX.reverse()', detail: '反转运动方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**改变圆周运动方向**') },
    { label: 'CircY.reverse()', detail: '反转运动方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**改变圆周运动方向**') },
    // === Elastic 弹性动画 ===
    { label: 'Elastic()', detail: '弹性动画插值', insertText: 'Elastic(${1:start}, ${2:end}, ${3:amplitude}, ${4:period}, ${5:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**弹性动画插值**\n\n参数: start, end, amplitude(振幅), period(周期), transferTime\n\n示例: `Elastic(0, 100, 1.0, 0.3, 1000)`') },
    { label: 'Elastic.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'Elastic.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Elastic.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Expo 指数动画 ===
    { label: 'Expo()', detail: '指数动画插值', insertText: 'Expo(${1:start}, ${2:end}, ${3:type}, ${4:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**指数动画插值**\n\n参数: start, end, type(0=easeIn, 1=easeOut, 2=easeInOut), transferTime\n\neaseIn: 开始极慢后期加速\neaseOut: 开始剧烈后期极慢\neaseInOut: 两端极慢中间剧烈') },
    { label: 'Expo.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'Expo.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Expo.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Q2 二次方动画 ===
    { label: 'Q2()', detail: '二次方动画插值', insertText: 'Q2(${1:start}, ${2:end}, ${3:type}, ${4:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**二次方动画插值**(t²)\n\n参数: start, end, type(0=easeIn, 1=easeOut, 2=easeInOut), transferTime\n\n效果: 柔和的加速或减速') },
    { label: 'Q2.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'Q2.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Q2.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Q3 三次方动画 ===
    { label: 'Q3()', detail: '三次方动画插值', insertText: 'Q3(${1:start}, ${2:end}, ${3:type}, ${4:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**三次方动画插值**(t³)\n\n参数: start, end, type(0=easeIn, 1=easeOut, 2=easeInOut), transferTime\n\n效果: 较强的加速或减速') },
    { label: 'Q3.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'Q3.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Q3.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Q4 四次方动画 ===
    { label: 'Q4()', detail: '四次方动画插值', insertText: 'Q4(${1:start}, ${2:end}, ${3:type}, ${4:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**四次方动画插值**(t⁴)\n\n参数: start, end, type(0=easeIn, 1=easeOut, 2=easeInOut), transferTime\n\n效果: 剧烈的加速或减速') },
    { label: 'Q4.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'Q4.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Q4.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Q5 五次方动画 ===
    { label: 'Q5()', detail: '五次方动画插值', insertText: 'Q5(${1:start}, ${2:end}, ${3:type}, ${4:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**五次方动画插值**(t⁵)\n\n参数: start, end, type(0=easeIn, 1=easeOut, 2=easeInOut), transferTime\n\n效果: 最剧烈的加速或减速') },
    { label: 'Q5.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'Q5.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Q5.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Sine 正弦动画 ===
    { label: 'Sine()', detail: '正弦动画插值', insertText: 'Sine(${1:start}, ${2:end}, ${3:type}, ${4:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**正弦动画插值**\n\n参数: start, end, type(0=easeIn, 1=easeOut, 2=easeInOut), transferTime\n\neaseIn: 余弦渐入, easeOut: 正弦渐出, easeInOut: 余弦对称过渡') },
    { label: 'Sine.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'Sine.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Sine.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Smooth 平滑动画 ===
    { label: 'Smooth()', detail: '平滑动画插值', insertText: 'Smooth(${1:start}, ${2:end}, ${3:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**平滑动画插值** - 基于余弦函数\n\n参数: start, end, transferTime\n\n特点: 两端平滑，中间匀速，比线性更自然') },
    { label: 'Smooth.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'Smooth.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Smooth.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Spring 弹簧动画 ===
    { label: 'Spring()', detail: '弹簧动画插值', insertText: 'Spring(${1:start}, ${2:end}, ${3:tension}, ${4:damping}, ${5:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**弹簧动画插值** - 模拟真实弹簧物理特性\n\n参数: start, end, tension(张力), damping(阻尼), transferTime\n\n示例: `Spring(0, 100, 170.0, 26.0, 1000)`') },
    { label: 'Spring.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'Spring.reset()', detail: '重置插值器', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置插值器**') },
    { label: 'Spring.reverse()', detail: '反转动画方向', insertText: 'reverse()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**反转动画方向**') },
    // === Fade 淡入淡出 ===
    { label: 'Fade()', detail: '淡入淡出动画', insertText: 'Fade(${1:fadeInDuration}, ${2:stayDuration}, ${3:fadeOutDuration})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**淡入淡出动画** - 控制不透明度\n\n参数: fadeInDuration(淡入), stayDuration(停留), fadeOutDuration(淡出)\n\n返回值: 0.0-1.0（淡入→1→停留→淡出→0）') },
    { label: 'Fade.get()', detail: '获取当前不透明度', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前不透明度**\n\n返回值: 0.0-1.0') },
    { label: 'Fade.reset()', detail: '重置动画状态', insertText: 'reset()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重置到淡入起始状态**') },
    // === TwoLerp 双阶段线性插值 ===
    { label: 'TwoLerp()', detail: '双阶段线性插值', insertText: 'TwoLerp(${1:initialValue}, ${2:middleValue}, ${3:finalValue}, ${4:firstStageTime}, ${5:secondStageTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**双阶段线性插值** - 先到中间值再到最终值\n\n参数: initialValue, middleValue, finalValue, firstStageTime, secondStageTime\n\n示例: `TwoLerp(0, 1, 0, 1000, 1000)` - 1秒到1再用1秒回到0') },
    { label: 'TwoLerp.get()', detail: '获取当前插值结果', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前插值结果**') },
    { label: 'TwoLerp.isFinished()', detail: '检查动画是否完成', insertText: 'isFinished()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检查动画是否完成**\n\n返回值: 布尔') },
    { label: 'TwoLerp.getProgress()', detail: '获取动画完成进度', insertText: 'getProgress()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取动画完成进度**\n\n返回值: 0.0-1.0') },
    { label: 'TwoLerp.getCurrentStage()', detail: '获取当前阶段', insertText: 'getCurrentStage()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前所处阶段**\n\n返回值: 0=第一阶段, 1=第二阶段, 2=完成') },
    { label: 'TwoLerp.getStageProgress()', detail: '获取当前阶段进度', insertText: 'getStageProgress()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前阶段的完成进度**\n\n返回值: 0.0-1.0') },
    // === Blink 闪烁效果 ===
    { label: 'Blink()', detail: '闪烁效果', insertText: 'Blink(${1:start}, ${2:end}, ${3:transferTime})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**闪烁效果** - 两值间往返过渡\n\n参数: start, end, transferTime(单次过渡)\n\n示例: `Blink(0, 1, 1000)` - 每秒在0和1之间变化') },
    { label: 'Blink.get()', detail: '获取当前闪烁值', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前闪烁值**') },
    { label: 'Blink.setAutoReverse()', detail: '设置是否自动反转', insertText: 'setAutoReverse(${1:boolean})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置是否自动反转**') },
    { label: 'Blink.isReversed()', detail: '检查是否反向状态', insertText: 'isReversed()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检查是否处于反向状态**\n\n返回值: 布尔') },
    { label: 'Blink.getProgress()', detail: '获取当前过渡进度', insertText: 'getProgress()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前过渡进度**\n\n返回值: 0.0-1.0') },
    // === Breathe 呼吸效果 ===
    { label: 'Breathe()', detail: '呼吸效果', insertText: 'Breathe(${1:minValue}, ${2:maxValue}, ${3:inhaleTime}, ${4:exhaleTime}, ${5:holdTime}, ${6:naturalCurve})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**呼吸效果** - 模拟自然呼吸节奏\n\n参数: minValue(最小), maxValue(最大), inhaleTime(吸气), exhaleTime(呼气), holdTime(屏息), naturalCurve(自然曲线)\n\n示例: `Breathe(0.8, 1.2, 2000, 2500, 500)`\n\n阶段: 吸气→屏息→呼气→屏息') },
    { label: 'Breathe.get()', detail: '获取当前呼吸值', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前呼吸值**') },
    { label: 'Breathe.phase()', detail: '获取当前呼吸阶段', insertText: 'phase()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前呼吸阶段**\n\n返回值: "inhale", "hold_in", "exhale", "hold_out"') },
    { label: 'Breathe.cycleProgress()', detail: '获取周期进度', insertText: 'cycleProgress()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前周期进度**\n\n返回值: 0.0-1.0') },
    { label: 'Breathe.intensity()', detail: '获取呼吸强度', insertText: 'intensity()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取呼吸强度**\n\n返回值: 0.0-1.0') },
    // === Pulse 脉搏效果 ===
    { label: 'Pulse()', detail: '脉搏效果', insertText: 'Pulse(${1:minValue}, ${2:maxValue}, ${3:pulseDuration}, ${4:intensity}, ${5:smooth})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**脉搏效果** - 心跳、闪烁等效果\n\n参数: minValue, maxValue, pulseDuration(单次脉搏), intensity(强度0-1), smooth(是否平滑)\n\n示例: `Pulse(0.5, 1.0, 800, 0.8)`') },
    { label: 'Pulse.get()', detail: '获取当前脉搏值', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前脉搏值**') },
    { label: 'Pulse.phase()', detail: '获取脉搏相位', insertText: 'phase()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前脉搏相位**\n\n返回值: 0.0-1.0') },
    { label: 'Pulse.sync()', detail: '同步脉搏节拍', insertText: 'sync()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**同步脉搏节拍** - 重置时间以便同步') },
    // === Shake 抖动效果 ===
    { label: 'Shake()', detail: '抖动效果', insertText: 'Shake(${1:centerValue}, ${2:intensity}, ${3:totalDuration}, ${4:shakeInterval}, ${5:shakeCount}, ${6:damping})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**抖动效果** - 错误提示、警告等\n\n参数: centerValue(中心), intensity(强度), totalDuration, shakeInterval, shakeCount, damping(是否阻尼)\n\n示例: `Shake(0, 10, 600, 50, 6)` - 600ms内抖动6次') },
    { label: 'Shake.get()', detail: '获取当前抖动位置', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前抖动位置**') },
    { label: 'Shake.intensity()', detail: '获取当前抖动强度', insertText: 'intensity()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前抖动强度**（考虑阻尼衰减）') },
    { label: 'Shake.trigger()', detail: '触发新的抖动', insertText: 'trigger()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**触发一次新的抖动**') },
    { label: 'Shake.isComplete()', detail: '检查抖动是否完成', insertText: 'isComplete()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检查抖动是否完成**\n\n返回值: 布尔') },
    // === Swing 摆动效果 ===
    { label: 'Swing()', detail: '摆动效果', insertText: 'Swing(${1:centerAngle}, ${2:maxAngle}, ${3:period}, ${4:damping}, ${5:dampingFactor}, ${6:gravity})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**摆动效果** - 钟摆式运动\n\n参数: centerAngle(中心), maxAngle(最大角度), period(周期), damping(阻尼), dampingFactor(系数0.001-1.0), gravity(重力)\n\n示例: `Swing(0, 30, 2000)` - 2秒一个周期') },
    { label: 'Swing.get()', detail: '获取当前摆动角度', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前摆动角度**') },
    { label: 'Swing.velocity()', detail: '获取摆动速度', insertText: 'velocity()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取摆动速度**（角速度）') },
    { label: 'Swing.energy()', detail: '获取动能', insertText: 'energy()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取动能** E = 0.5 * v²') },
    { label: 'Swing.amplitude()', detail: '获取摆动幅度', insertText: 'amplitude()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取摆动幅度**（考虑阻尼衰减）') },
    { label: 'Swing.restart()', detail: '重新启动摆动', insertText: 'restart()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重新启动摆动**') },
    // === Wave 波浪效果 ===
    { label: 'Wave()', detail: '波浪效果', insertText: 'Wave(${1:centerValue}, ${2:amplitude}, ${3:period}, ${4:phaseOffset}, ${5:damping}, ${6:dampingFactor})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**波浪效果** - 基于正弦函数\n\n参数: centerValue(中心), amplitude(振幅), period(周期), phaseOffset(相位偏移), damping(阻尼), dampingFactor(系数)\n\n示例: `Wave(0, 50, 2000, 0)` - 振幅50，2秒一个周期') },
    { label: 'Wave.get()', detail: '获取当前波浪值', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前波浪值**\n\n公式: centerValue + amplitude * sin(angle)') },
    { label: 'Wave.normalized()', detail: '获取归一化波浪值', insertText: 'normalized()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取归一化波浪值**\n\n返回值: -1.0 到 1.0') },
    { label: 'Wave.phase()', detail: '获取当前相位', insertText: 'phase()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前相位**\n\n返回值: 0.0-1.0') },
    { label: 'Wave.cosine()', detail: '获取余弦波变体', insertText: 'cosine()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取余弦波变体**（相位差90度）') },
    // === Slide 滑动效果 ===
    { label: 'Slide()', detail: '滑动效果', insertText: 'Slide(${1:startPosition}, ${2:endPosition}, ${3:transferTime}, ${4:easeType})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**滑动效果** - UI元素滑入滑出\n\n参数: startPosition, endPosition, transferTime, easeType(0=线性, 1=缓入, 2=缓出, 3=缓入缓出, 4=弹跳)\n\n示例: `Slide(-100, 0, 500)` - 从-100滑到0') },
    { label: 'Slide.get()', detail: '获取当前滑动位置', insertText: 'get()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前滑动位置**') },
    { label: 'Slide.progress()', detail: '获取滑动完成进度', insertText: 'progress()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取滑动完成进度**\n\n返回值: 0.0-1.0') },
    // === Cast 类型转换 ===
    { label: 'Cast.toBoolean()', detail: '将值转换为布尔类型', insertText: 'toBoolean(${1:value})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**将值转换为布尔类型**\n\n**参数**: value (任意类型值)\n\n**返回值**: 布尔类型\n\n**示例**: `Cast.toBoolean("true")` → `true`') },
    { label: 'Cast.toInt()', detail: '将值转换为整数类型', insertText: 'toInt(${1:value})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**将值转换为整数类型**\n\n**参数**: value (任意类型值)\n\n**返回值**: 整数类型\n\n**示例**: `Cast.toInt("123")` → `123`') },
    { label: 'Cast.toDouble()', detail: '将值转换为双精度浮点类型', insertText: 'toDouble(${1:value})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**将值转换为双精度浮点类型**\n\n**参数**: value (任意类型值)\n\n**返回值**: 双精度浮点类型\n\n**示例**: `Cast.toDouble("3.14")` → `3.14`') },
    { label: 'Cast.toString()', detail: '将值转换为字符串类型', insertText: 'toString(${1:value})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**将值转换为字符串类型**\n\n**参数**: value (任意类型值)\n\n**返回值**: 字符串类型\n\n**示例**: `Cast.toString(123)` → `"123"`') },
    { label: 'Cast.toFloat()', detail: '将值转换为单精度浮点类型', insertText: 'toFloat(${1:value})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**将值转换为单精度浮点类型**\n\n**参数**: value (任意类型值)\n\n**返回值**: 单精度浮点类型\n\n**示例**: `Cast.toFloat("3.14")` → `3.14`') },
    { label: 'Cast.toLong()', detail: '将值转换为长整数类型', insertText: 'toLong(${1:value})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**将值转换为长整数类型**\n\n**参数**: value (任意类型值)\n\n**返回值**: 长整数类型\n\n**示例**: `Cast.toLong("123456789")` → `123456789`') },
    // === Chat 聊天 ===
    { label: 'Chat.open()', detail: '打开聊天界面', insertText: 'open(${1:message})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**打开聊天界面**\n\n**参数**: message (字符串类型，可选)\n\n**返回值**: 无\n\n**说明**: 可选择是否预填充消息\n\n**示例**: `Chat.open("Hello world!")`') },
    { label: 'Chat.setMessage()', detail: '设置聊天框的内容', insertText: 'setMessage(${1:message})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置聊天框的内容**\n\n**参数**: message (字符串类型)\n\n**返回值**: 无\n\n**示例**: `Chat.setMessage("Hello Minecraft!")`') },
    { label: 'Chat.addMessage()', detail: '追加聊天消息', insertText: 'addMessage(${1:message})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**在当前聊天框内容后追加文本**\n\n**参数**: message (字符串类型)\n\n**返回值**: 无\n\n**示例**: `Chat.addMessage(" World!")`') },
    { label: 'Chat.getMessage()', detail: '获取聊天框内容', insertText: 'getMessage()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前聊天框的内容**\n\n**参数**: 无\n\n**返回值**: 字符串类型\n\n**示例**: `Chat.getMessage()` → `"Hello Minecraft!"`') },
    { label: 'Chat.say()', detail: '发送聊天消息', insertText: 'say(${1:message})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**发送一条聊天消息**\n\n**参数**: message (字符串类型)\n\n**返回值**: 无\n\n**示例**: `Chat.say("Hello everyone!")`') },
    { label: 'Chat.getEventMessage()', detail: '获取事件消息', insertText: 'getEventMessage()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前事件的聊天消息**\n\n**参数**: 无\n\n**返回值**: 字符串类型\n\n**示例**: `Chat.getEventMessage()` → `"Player joined the game"`') },
    { label: 'Chat.getLastMessage()', detail: '获取最后消息', insertText: 'getLastMessage()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取最后一条聊天消息**\n\n**参数**: 无\n\n**返回值**: 字符串类型\n\n**示例**: `Chat.getLastMessage()` → `"Last chat message"`') },
    // === Display 显示 ===
    { label: 'Display.setResizable()', detail: '设置窗口可调整大小', insertText: 'setResizable(${1:resizable})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置窗口是否可调整大小**\n\n**参数**: resizable (布尔类型)\n\n**返回值**: 无\n\n**示例**: `Display.setResizable(true)`') },
    { label: 'Display.setFullScreen()', detail: '设置全屏', insertText: 'setFullScreen(${1:fullscreen})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置窗口是否全屏**\n\n**参数**: fullscreen (布尔类型)\n\n**返回值**: 无\n\n**示例**: `Display.setFullScreen(true)`') },
    { label: 'Display.isFullScreen()', detail: '是否全屏', insertText: 'isFullScreen()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取窗口是否处于全屏状态**\n\n**参数**: 无\n\n**返回值**: 布尔类型\n\n**示例**: `Display.isFullScreen()` → `true`') },
    { label: 'Display.isResizable()', detail: '是否可调整大小', insertText: 'isResizable()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取窗口是否可调整大小**\n\n**参数**: 无\n\n**返回值**: 布尔类型\n\n**示例**: `Display.isResizable()` → `true`') },
    { label: 'Display.desktopWidth()', detail: '桌面宽度', insertText: 'desktopWidth()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取桌面宽度**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Display.desktopWidth()` → `1920`') },
    { label: 'Display.desktopHeight()', detail: '桌面高度', insertText: 'desktopHeight()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取桌面高度**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Display.desktopHeight()` → `1080`') },
    { label: 'Display.width()', detail: '窗口宽度', insertText: 'width()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取窗口宽度**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Display.width()` → `1280`') },
    { label: 'Display.height()', detail: '窗口高度', insertText: 'height()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取窗口高度**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Display.height()` → `720`') },
    { label: 'Display.x()', detail: '窗口X坐标', insertText: 'x()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取窗口X坐标**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Display.x()` → `100`') },
    { label: 'Display.y()', detail: '窗口Y坐标', insertText: 'y()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取窗口Y坐标**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Display.y()` → `100`') },
    { label: 'Display.setLocation()', detail: '设置窗口位置', insertText: 'setLocation(${1:x}, ${2:y})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置窗口位置**\n\n**参数**: x, y (整数类型)\n\n**返回值**: 无\n\n**示例**: `Display.setLocation(100, 100)`') },
    { label: 'Display.resize()', detail: '调整窗口大小', insertText: 'resize(${1:width}, ${2:height})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**调整窗口大小**\n\n**参数**: width, height (整数类型)\n\n**返回值**: 无\n\n**示例**: `Display.resize(1280, 720)`') },
    { label: 'Display.getScale()', detail: '获取缩放比例', insertText: 'getScale()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取窗口缩放比例**\n\n**参数**: 无\n\n**返回值**: 浮点类型\n\n**示例**: `Display.getScale()` → `1.0`') },
    // === Entity 实体 ===
    { label: 'Entity.isRendering()', detail: '检查实体是否渲染', insertText: 'isRendering(${1:uuid})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检查指定UUID的实体是否正在渲染**\n\n**参数**: uuid (字符串类型，实体UUID)\n\n**返回值**: 布尔类型\n\n**示例**: `Entity.isRendering("550e8400-e29b-41d4-a716-446655440000")` → `true`') },
    { label: 'Entity.getMouseEntityName()', detail: '获取鼠标实体名称', insertText: 'getMouseEntityName()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取鼠标指向实体的名称**\n\n**参数**: 无\n\n**返回值**: 字符串类型\n\n**示例**: `Entity.getMouseEntityName()` → `"Steve"`') },
    { label: 'Entity.getMouseEntityDistance()', detail: '获取鼠标实体距离', insertText: 'getMouseEntityDistance()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家与鼠标指向实体的距离**\n\n**参数**: 无\n\n**返回值**: 双精度浮点类型\n\n**示例**: `Entity.getMouseEntityDistance()` → `3.5`') },
    { label: 'Entity.getMouseEntityUUID()', detail: '获取鼠标实体UUID', insertText: 'getMouseEntityUUID()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取鼠标指向实体的UUID**\n\n**参数**: 无\n\n**返回值**: 字符串类型\n\n**示例**: `Entity.getMouseEntityUUID()` → `"550e8400-e29b-41d4-a716-446655440000"`') },
    { label: 'Entity.getMouseEntityHealth()', detail: '获取鼠标实体生命值', insertText: 'getMouseEntityHealth()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取鼠标指向实体的当前生命值**\n\n**参数**: 无\n\n**返回值**: 双精度浮点类型\n\n**示例**: `Entity.getMouseEntityHealth()` → `20.0`') },
    { label: 'Entity.getMouseEntityMaxHealth()', detail: '获取鼠标实体最大生命值', insertText: 'getMouseEntityMaxHealth()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取鼠标指向实体的最大生命值**\n\n**参数**: 无\n\n**返回值**: 双精度浮点类型\n\n**示例**: `Entity.getMouseEntityMaxHealth()` → `20.0`') },
    { label: 'Entity.isMouseEntityAdyeshach()', detail: '是否为Adyeshach实体', insertText: 'isMouseEntityAdyeshach()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检查鼠标指向的实体是否为Adyeshach实体**\n\n**参数**: 无\n\n**返回值**: 布尔类型\n\n**示例**: `Entity.isMouseEntityAdyeshach()` → `true`') },
    // === Fog 雾效 ===
    { label: 'Fog.setup()', detail: '设置雾效', insertText: 'setup(${1:r}, ${2:g}, ${3:b}, ${4:start}, ${5:end})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置雾效参数**\n\n**参数**:\n- r (整数，红色分量0-255)\n- g (整数，绿色分量0-255)\n- b (整数，蓝色分量0-255)\n- start (浮点数，雾效起始距离)\n- end (浮点数，雾效结束距离)\n\n**返回值**: 无\n\n**示例**:\n```shimmer\n// 设置白色雾效，从5个方块开始，延伸到20个方块\nFog.setup(255, 255, 255, 5.0, 20.0)\n// 设置红色雾效，从2个方块开始，延伸到15个方块\nFog.setup(255, 0, 0, 2.0, 15.0)\n```') },
    { label: 'Fog.clear()', detail: '清除雾效', insertText: 'clear()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**清除当前雾效设置**\n\n**参数**: 无\n\n**返回值**: 无\n\n**注意**: 清除雾效后将恢复到游戏默认的环境效果') },
    // === Game 游戏 ===
    { label: 'Game.options()', detail: '打开游戏选项', insertText: 'options()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**打开游戏选项界面**\n\n**参数**: 无\n\n**返回值**: 无') },
    { label: 'Game.quit()', detail: '退出游戏', insertText: 'quit()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**退出当前游戏**\n\n**参数**: 无\n\n**返回值**: 无') },
    { label: 'Game.shutdown()', detail: '关闭游戏', insertText: 'shutdown()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**关闭游戏客户端**\n\n**参数**: 无\n\n**返回值**: 无') },
    { label: 'Game.advancements()', detail: '打开成就界面', insertText: 'advancements()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**打开成就界面**\n\n**参数**: 无\n\n**返回值**: 无') },
    { label: 'Game.stat()', detail: '打开统计信息', insertText: 'stat()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**打开统计信息界面**\n\n**参数**: 无\n\n**返回值**: 无') },
    { label: 'Game.setScale()', detail: '设置缩放', insertText: 'setScale(${1:scale})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置游戏界面缩放比例**\n\n**参数**: scale (整数类型，>=1)\n\n**返回值**: 无\n\n**示例**: `Game.setScale(2)`') },
    { label: 'Game.getFPS()', detail: '获取帧率', insertText: 'getFPS()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前游戏帧率**\n\n**参数**: 无\n\n**返回值**: 字符串类型\n\n**示例**: `Game.getFPS()` → `"60 fps"`') },
    // === Keyboard 键盘 ===
    { label: 'Keyboard.isKeyDown()', detail: '按键是否按下', insertText: 'isKeyDown(${1:key})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检测指定按键是否被按下**\n\n**参数**: key (字符串类型，按键名称)\n\n**返回值**: 布尔类型\n\n**示例**: `Keyboard.isKeyDown("W")` → `true`') },
    { label: 'Keyboard.getKeyBindingKeyName()', detail: '获取按键绑定名称', insertText: 'getKeyBindingKeyName(${1:binding})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取按键绑定的显示名称**\n\n**参数**: binding (字符串类型，按键绑定名称)\n\n**返回值**: 字符串类型\n\n**示例**: `Keyboard.getKeyBindingKeyName("forward")` → `"W"`') },
    { label: 'Keyboard.getKeyBindingKeyModifierName()', detail: '获取修饰键名称', insertText: 'getKeyBindingKeyModifierName(${1:binding})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取按键绑定的修饰键名称**\n\n**注意**: Fabric版本没有此功能，填了是无效的\n\n**参数**: binding (字符串类型，按键绑定名称)\n\n**返回值**: 字符串类型\n\n**示例**: `Keyboard.getKeyBindingKeyModifierName("screenshot")` → `"CONTROL"`') },
    { label: 'Keyboard.setKeyBindingKeyName()', detail: '设置按键绑定', insertText: 'setKeyBindingKeyName(${1:binding}, ${2:modifier}, ${3:keyCode})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置按键绑定**\n\n**注意**: Fabric版本没有modifier，填了是无效的，但要随便填个字符串参数进去\n\n**参数**:\n- binding (字符串类型，按键绑定名称)\n- modifier (字符串类型，修饰键名称)\n- keyCode (整数类型，按键代码)\n\n**返回值**: 无\n\n**示例**: `Keyboard.setKeyBindingKeyName("forward", "NONE", 87)`') },
    { label: 'Keyboard.keyPress()', detail: '模拟按键', insertText: 'keyPress(${1:key}, ${2:pressed})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**模拟按键按下或释放**\n\n**参数**:\n- key (字符串类型，按键名称)\n- pressed (布尔类型，是否按下)\n\n**返回值**: 无\n\n**示例**: `Keyboard.keyPress("W", true)`') },
    // === Message 消息 ===
    { label: 'Message.chat()', detail: '发送聊天消息', insertText: 'chat(${1:message})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**发送聊天消息**\n\n**参数**: message (字符串类型)\n\n**返回值**: 无\n\n**示例**: `Message.chat("Hello World!")`') },
    { label: 'Message.actionBar()', detail: '动作栏消息', insertText: 'actionBar(${1:message})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**在动作栏显示消息**\n\n**参数**: message (字符串类型)\n\n**返回值**: 无\n\n**示例**: `Message.actionBar("Action message")`') },
    { label: 'Message.title()', detail: '标题消息', insertText: 'title(${1:title}, ${2:subtitle}, ${3:fadeIn}, ${4:stay}, ${5:fadeOut})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**显示标题和副标题**\n\n**参数**:\n- title (字符串类型，主标题文本)\n- subtitle (字符串类型，副标题文本)\n- fadeIn (整数类型，淡入时间tick)\n- stay (整数类型，停留时间tick，默认60)\n- fadeOut (整数类型，淡出时间tick)\n\n**返回值**: 无\n\n**示例**: `Message.title("Main Title", "Sub Title", 10, 60, 10)`') },
    // === Name 名称 ===
    { label: 'Name.getEntityName()', detail: '获取实体名称', insertText: 'getEntityName(${1:uuid})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**根据UUID获取实体名称**\n\n**参数**: uuid (字符串类型，实体的UUID)\n\n**返回值**: 字符串类型\n\n**示例**: `Name.getEntityName("550e8400-e29b-41d4-a716-446655440000")` → `"Steve"`') },
    { label: 'Name.getBlockName()', detail: '获取方块名称', insertText: 'getBlockName(${1:x}, ${2:y}, ${3:z})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取指定坐标方块的名称**\n\n**参数**: x, y, z (整数类型，坐标)\n\n**返回值**: 字符串类型\n\n**示例**: `Name.getBlockName(0, 64, 0)` → `"Stone"`') },
    // === Packet 数据包 ===
    { label: 'Packet.send()', detail: '发送数据包', insertText: 'send(${1:type}, ${2:data})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**发送自定义网络数据包**\n\n**参数**:\n- type (字符串类型，数据包类型)\n- data (可变参数，数据包内容，可以是字符串或字符串列表)\n\n**返回值**: 无\n\n**示例**:\n```shimmer\n// 发送无数据的数据包\nPacket.send("test")\n// 发送单个数据的数据包\nPacket.send("test", "data")\n// 发送多个数据的数据包\nPacket.send("test", "data1", "data2", "data3")\n```') },
    // === Placeholder 占位符 ===
    { label: 'Placeholder.parse()', detail: '解析占位符', insertText: 'parse(${1:placeholder})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**解析服务器变量占位符**\n\n**参数**: placeholder (字符串类型，变量占位符)\n\n**返回值**: 字符串类型（解析后的变量值）\n\n**注意**: 如果变量不存在，将返回空字符串\n\n**示例**: `Placeholder.parse("%player_name%")` → `"Steve"`') },
    // === Player 玩家 ===
    { label: 'Player.getName()', detail: '获取玩家名称', insertText: 'getName()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家名称**\n\n**参数**: 无\n\n**返回值**: 字符串类型\n\n**示例**: `Player.getName()` → `"Steve"`') },
    { label: 'Player.getUUID()', detail: '获取玩家UUID', insertText: 'getUUID()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家UUID**\n\n**参数**: 无\n\n**返回值**: 字符串类型\n\n**示例**: `Player.getUUID()` → `"550e8400-e29b-41d4-a716-446655440000"`') },
    { label: 'Player.getOnlinePlayersDict()', detail: '获取在线玩家列表', insertText: 'getOnlinePlayersDict()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取在线玩家列表**\n\n**参数**: 无\n\n**返回值**: 字典类型（Key为玩家名，Value为UUID）\n\n**示例**: `Player.getOnlinePlayersDict()` → `{"Steve": "uuid1", "Alex": "uuid2"}`') },
    { label: 'Player.getHealth()', detail: '获取玩家生命值', insertText: 'getHealth()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家当前生命值**\n\n**参数**: 无\n\n**返回值**: 浮点数类型\n\n**示例**: `Player.getHealth()` → `20.0`') },
    { label: 'Player.getMaxHealth()', detail: '获取玩家最大生命值', insertText: 'getMaxHealth()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家最大生命值**\n\n**参数**: 无\n\n**返回值**: 浮点数类型\n\n**示例**: `Player.getMaxHealth()` → `20.0`') },
    { label: 'Player.getLevel()', detail: '获取玩家等级', insertText: 'getLevel()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家等级**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Player.getLevel()` → `30`') },
    { label: 'Player.getExp()', detail: '获取玩家经验', insertText: 'getExp()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家经验值**\n\n**参数**: 无\n\n**返回值**: 浮点数类型\n\n**示例**: `Player.getExp()` → `0.75`') },
    { label: 'Player.getPosX()', detail: '获取玩家X坐标', insertText: 'getPosX()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家X坐标**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型\n\n**示例**: `Player.getPosX()` → `100.5`') },
    { label: 'Player.getPosY()', detail: '获取玩家Y坐标', insertText: 'getPosY()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家Y坐标**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型\n\n**示例**: `Player.getPosY()` → `64.0`') },
    { label: 'Player.getPosZ()', detail: '获取玩家Z坐标', insertText: 'getPosZ()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家Z坐标**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型\n\n**示例**: `Player.getPosZ()` → `-200.5`') },
    { label: 'Player.getYaw()', detail: '获取玩家偏航角', insertText: 'getYaw()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家偏航角**\n\n**参数**: 无\n\n**返回值**: 浮点数类型\n\n**示例**: `Player.getYaw()` → `180.0`') },
    { label: 'Player.getPitch()', detail: '获取玩家俯仰角', insertText: 'getPitch()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家俯仰角**\n\n**参数**: 无\n\n**返回值**: 浮点数类型\n\n**示例**: `Player.getPitch()` → `45.0`') },
    { label: 'Player.isFlying()', detail: '玩家是否飞行', insertText: 'isFlying()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检测玩家是否飞行**\n\n**参数**: 无\n\n**返回值**: 布尔类型\n\n**示例**: `Player.isFlying()` → `false`') },
    { label: 'Player.isInWater()', detail: '玩家是否在水中', insertText: 'isInWater()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检测玩家是否在水中**\n\n**参数**: 无\n\n**返回值**: 布尔类型\n\n**示例**: `Player.isInWater()` → `false`') },
    { label: 'Player.isOnGround()', detail: '玩家是否在地面', insertText: 'isOnGround()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检测玩家是否在地面**\n\n**参数**: 无\n\n**返回值**: 布尔类型\n\n**示例**: `Player.isOnGround()` → `true`') },
    { label: 'Player.getFood()', detail: '获取玩家饥饿值', insertText: 'getFood()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家饥饿值**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Player.getFood()` → `20`') },
    { label: 'Player.getAir()', detail: '获取玩家氧气值', insertText: 'getAir()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家氧气值**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Player.getAir()` → `300`') },
    { label: 'Player.getArmor()', detail: '获取玩家护甲值', insertText: 'getArmor()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家护甲值**\n\n**参数**: 无\n\n**返回值**: 整数类型\n\n**示例**: `Player.getArmor()` → `20`') },
    { label: 'Player.getCurrentItem()', detail: '获取当前物品', insertText: 'getCurrentItem()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前选中物品栏位置**\n\n**参数**: 无\n\n**返回值**: 整数类型（0-8）\n\n**示例**: `Player.getCurrentItem()` → `0`') },
    { label: 'Player.isFallFlying()', detail: '玩家是否滑翔', insertText: 'isFallFlying()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**检测玩家是否正在滑翔**\n\n**参数**: 无\n\n**返回值**: 布尔类型\n\n**示例**: `Player.isFallFlying()` → `true` 或 `false`') },
    { label: 'Player.respawn()', detail: '重生玩家', insertText: 'respawn()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**重生玩家**\n\n**参数**: 无\n\n**返回值**: 无') },
    { label: 'Player.getMainHandItem()', detail: '获取主手物品', insertText: 'getMainHandItem()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家主手物品**\n\n**参数**: 无\n\n**返回值**: ItemStack对象') },
    // === Potion 药水 ===
    { label: 'Potion.getActivePotionEffects()', detail: '获取激活药水效果', insertText: 'getActivePotionEffects()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家当前所有激活的药水效果**\n\n**参数**: 无\n\n**返回值**: 药水效果实例列表 (List<EffectValue>)\n\n**注意**: 如果玩家不存在（例如未进入游戏），将返回空列表\n\n**示例**: `Potion.getActivePotionEffects()` → `[EffectValue]`') },
    // === Screen 屏幕 ===
    { label: 'Screen.getWidth()', detail: '获取窗口宽度', insertText: 'getWidth()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取游戏窗口的宽度**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Screen.getHeight()', detail: '获取窗口高度', insertText: 'getHeight()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取游戏窗口的高度**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Screen.open()', detail: '打开UI', insertText: 'open(${1:name})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**打开指定ID的UI**\n\n**参数**: name (字符串类型，ID)\n\n**返回值**: 无\n\n**示例**:\n```shimmer\nScreen.open("settings")  // 使用默认命名空间\n```') },
    { label: 'Screen.close()', detail: '关闭界面', insertText: 'close(${1:name})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**关闭当前或指定的菜单界面**\n\n**参数**: name (字符串类型，可选，ID)\n\n**返回值**: 无\n\n**示例**:\n```shimmer\nScreen.close()  // 关闭当前界面\nScreen.close("settings")  // 关闭指定UI\n```') },
    // === Shader 着色器 ===
    { label: 'Shader.start()', detail: '启动着色器', insertText: 'start(${1:shaderName})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**启动指定的着色器效果**\n\n**参数**: shaderName (字符串类型，着色器名称)\n\n**返回值**: 无\n\n**注意**: 所有着色器操作都在游戏主线程同步执行\n\n**示例**: `Shader.start("blur")`') },
    { label: 'Shader.update()', detail: '更新着色器', insertText: 'update(${1:shaderName}, ${2:value})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**更新指定着色器的参数值**\n\n**参数**:\n- shaderName (字符串类型，着色器名称)\n- value (浮点数类型，着色器参数值)\n\n**返回值**: 无\n\n**示例**: `Shader.update("blur", 0.5)`') },
    { label: 'Shader.close()', detail: '关闭着色器', insertText: 'close()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**关闭当前运行的着色器效果**\n\n**参数**: 无\n\n**返回值**: 无\n\n**注意**: 过度使用复杂的着色器效果可能影响游戏性能\n\n**示例**: `Shader.close()`') },
    // === Skybox 天空盒 ===
    { label: 'Skybox.set()', detail: '设置天空盒', insertText: 'set(${1:path})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置天空盒纹理**\n\n**参数**: path (字符串类型，纹理资源路径)\n\n**返回值**: 无\n\n**注意**: 确保纹理资源路径正确且文件存在\n\n**示例**: `Skybox.set("textures/environment/night_sky.png")`') },
    { label: 'Skybox.clear()', detail: '清除天空盒', insertText: 'clear()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**清除当前天空盒纹理，恢复默认天空盒**\n\n**参数**: 无\n\n**返回值**: 无\n\n**注意**: 清除天空盒后将恢复到游戏默认天空效果\n\n**示例**: `Skybox.clear()`') },
    // === Sound 音效 ===
    { label: 'Sound.local()', detail: '播放位置音效', insertText: 'local(${1:identifier}, ${2:x}, ${3:y}, ${4:z}, ${5:category}, ${6:distance}, ${7:pitch}, ${8:duration})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**在指定位置播放3D音效**\n\n**参数**:\n- identifier (字符串类型，音效资源路径)\n- x, y, z (整数类型，坐标)\n- category (字符串类型，音效类别)\n- distance (整数类型，音效传播距离)\n- pitch (双精度浮点数类型，音调)\n- duration (整数类型，持续时间)\n\n**音效类别**: master, music, record, weather, block, hostile, neutral, player, ambient, voice\n\n**示例**: `Sound.local(\'xxx.ogg\', 100, 64, 100, \'master\', 16, 1.0, 20)`') },
    { label: 'Sound.entity()', detail: '播放实体音效', insertText: 'entity(${1:identifier}, ${2:target}, ${3:category}, ${4:distance}, ${5:pitch}, ${6:duration})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**为指定实体播放3D音效**\n\n**参数**:\n- identifier (字符串类型，音效资源路径)\n- target (字符串类型，目标实体UUID，使用"self"表示玩家自身)\n- category (字符串类型，音效类别)\n- distance (整数类型，音效传播距离)\n- pitch (双精度浮点数类型，音调)\n- duration (整数类型，持续时间)\n\n**示例**: `Sound.entity(\'xxx.ogg\', \'self\', \'master\', 16, 1.0, 20)`') },
    { label: 'Sound.self()', detail: '播放自身音效', insertText: 'self(${1:identifier}, ${2:pitch}, ${3:duration})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**为客户端玩家自身播放音效**\n\n用于UI提示音等不涉及空间音效的场景\n\n**参数**:\n- identifier (字符串类型，音效资源路径)\n- pitch (双精度浮点数类型，音调)\n- duration (整数类型，持续时间)\n\n**示例**: `Sound.self(\'xxx.ogg\', 1.0, 20)`') },
    { label: 'Sound.named()', detail: '播放命名音效', insertText: 'named(${1:identifier}, ${2:pitch}, ${3:duration}, ${4:name})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**为客户端玩家自身播放命名音效**\n\n命名音效可以被停止\n\n**参数**:\n- identifier (字符串类型，音效资源路径)\n- pitch (双精度浮点数类型，音调)\n- duration (整数类型，持续时间)\n- name (字符串类型，音效名称)\n\n**示例**: `Sound.named(\'xxx.ogg\', 1.0, 20, \'my_sound\')`') },
    { label: 'Sound.removeNamed()', detail: '停止命名音效', insertText: 'removeNamed(${1:name})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**停止播放命名音效**\n\n**参数**: name (字符串类型，音效名称)\n\n**返回值**: 无\n\n**示例**: `Sound.removeNamed(\'my_sound\')`') },
    // === Thread 线程 ===
    { label: 'Thread.sleep()', detail: '线程休眠', insertText: 'sleep(${1:time})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**使当前线程暂停执行指定的毫秒数**\n\n**参数**: time (整数类型，暂停时间，单位为毫秒)\n\n**返回值**: 整数类型（始终返回0）\n\n**注意**:\n- 如果传入的时间小于或等于0，将自动调整为1毫秒\n- 该方法会阻塞当前线程的执行\n- 通常用于实现定时或延迟操作\n\n**示例**: `Thread.sleep(1000)` // 暂停1秒') },
    // === Time 时间 ===
    { label: 'Time.currentTime()', detail: '获取时间戳', insertText: 'currentTime()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前时间戳（毫秒）**\n\n**参数**: 无\n\n**返回值**: 长整型数字（毫秒时间戳）\n\n**示例**: `Time.currentTime()` → `1707051600000`') },
    { label: 'Time.currentTimeFormat()', detail: '格式化时间', insertText: 'currentTimeFormat(${1:timestamp}, ${2:format})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**格式化时间戳为可读字符串**\n\n**参数**:\n- timestamp (长整型数字，可选，毫秒时间戳)\n- format (字符串类型，可选，时间格式模板)\n\n**返回值**: 字符串类型（格式化后的时间字符串）\n\n**默认格式**: "yyyy-MM-dd HH:mm:ss"\n\n**示例**:\n```shimmer\nTime.currentTimeFormat()              // "2024-02-04 20:00:00"\nTime.currentTimeFormat(1707051600000)  // "2024-02-04 20:00:00"\nTime.currentTimeFormat(1707051600000, "MM-dd HH:mm")  // "02-04 20:00"\n```') },
    // === Web 网页 ===
    { label: 'Web.open()', detail: '打开网页', insertText: 'open(${1:url})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**在默认浏览器中打开指定URL**\n\n**参数**: url (字符串类型，网页地址)\n\n**返回值**: 无\n\n**注意**:\n- URL必须以"https://"或"http://"开头\n- 不符合要求的URL将被忽略且不会打开\n- 该功能会调用系统默认浏览器打开链接\n\n**示例**: `Web.open("https://example.com")`') },
    // === Mouse 鼠标 ===
    { label: 'Mouse.wheel()', detail: '滚轮值', insertText: 'wheel()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取鼠标滚轮滚动值**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Mouse.x()', detail: '鼠标X坐标', insertText: 'x()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取鼠标X坐标**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Mouse.y()', detail: '鼠标Y坐标', insertText: 'y()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取鼠标Y坐标**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Mouse.getEventButton()', detail: '获取鼠标按键', insertText: 'getEventButton()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取鼠标当前按下的按键**\n\n**参数**: 无\n\n**返回值**: 整数类型') },
    // === Camera 相机 ===
    { label: 'Camera.setCameraPosition()', detail: '设置相机位置', insertText: 'setCameraPosition(${1:x}, ${2:y}, ${3:z}, ${4:isFree})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置相机位置**\n\n**参数**:\n- x (双精度浮点数类型，X坐标)\n- y (双精度浮点数类型，Y坐标)\n- z (双精度浮点数类型，Z坐标)\n- isFree (布尔类型，是否自由视角)\n\n**返回值**: 无\n\n**示例**: `Camera.setCameraPosition(0.0, 0.0, 0.0, true)`') },
    { label: 'Camera.setThirdPerson()', detail: '设置第三人称', insertText: 'setThirdPerson(${1:isThirdPerson})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置第三人称视角**\n\n**参数**: isThirdPerson (布尔类型，是否第三人称视角)\n\n**返回值**: 无\n\n**示例**: `Camera.setThirdPerson(true)`') },
    { label: 'Camera.setCameraPreset()', detail: '设置相机预设', insertText: 'setCameraPreset(${1:preset})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置相机预设**\n\n**参数**: preset (字符串类型，预设名称)\n\n**返回值**: 无\n\n**示例**: `Camera.setCameraPreset("default")`') },
    { label: 'Camera.lockCameraMode()', detail: '锁定相机模式', insertText: 'lockCameraMode(${1:mode})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**锁定相机模式**\n\n**参数**: mode (视角锁定模式，0=关闭，1=强制锁定第一人称，2=强制锁定第三人称)\n\n**返回值**: 无\n\n**示例**: `Camera.lockCameraMode(1)`') },
    { label: 'Camera.setState()', detail: '设置状态相机位置', insertText: 'setState(${1:x}, ${2:y}, ${3:z}, ${4:yaw}, ${5:pitch}, ${6:time})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置状态相机位置**\n\n状态相机是覆盖掉当前预设相机的xyz，而pitch和yaw是相对于玩家本体转向角度进行设置。\n该相机类型主要用于UI，比如一些UI需要应用自体相机位置变化的场景。\n\n**参数**:\n- x, y, z (双精度浮点数类型，坐标)\n- yaw (浮点数类型，偏航角)\n- pitch (浮点数类型，俯仰角)\n- time (长整型，过渡时间)\n\n**返回值**: 无\n\n**示例**: `Camera.setState(0.0, 0.0, 0.0, 0.0, 0.0, 1000)`') },
    { label: 'Camera.clearState()', detail: '清除状态相机位置', insertText: 'clearState()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**清除状态相机位置**\n\n**参数**: 无\n\n**返回值**: 无\n\n**示例**: `Camera.clearState()`') },
    { label: 'Camera.setStateScene()', detail: '设置单步场景相机', insertText: 'setStateScene(${1:x}, ${2:y}, ${3:z}, ${4:yaw}, ${5:pitch})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**设置单步场景相机位置**\n\n**参数**:\n- x, y, z (双精度浮点数类型，坐标)\n- yaw (浮点数类型，偏航角)\n- pitch (浮点数类型，俯仰角)\n\n**返回值**: 无\n\n**示例**: `Camera.setStateScene(0.0, 0.0, 0.0, 0.0, 0.0)`') },
    { label: 'Camera.clearStateScene()', detail: '关闭场景相机', insertText: 'clearStateScene()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**关闭场景相机**\n\n**参数**: 无\n\n**返回值**: 无\n\n**示例**: `Camera.clearStateScene()`') },
    // === Tip 工具提示 ===
    { label: 'Tip.getText()', detail: '获取Tip文本', insertText: 'getText()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取Tip文本**\n\n**参数**: 无\n\n**返回值**: 列表类型（包含Tip文本的字符串列表）\n\n**注意**: 解析的文本会将 `!&!*` `!&!#` `!&!%` 替换为 `§*` `§#` `§%`') },
    { label: 'Tip.getDisplay()', detail: '获取物品显示名', insertText: 'getDisplay()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取物品显示名（第一行Tip文本）**\n\n**参数**: 无\n\n**返回值**: 字符串类型（物品显示名）\n\n**注意**: 解析的文本会将 `!&!*` `!&!#` `!&!%` 替换为 `§*` `§#` `§%`') },
    { label: 'Tip.getLore()', detail: '获取物品Lore', insertText: 'getLore()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取物品Lore（除第一行外的Tip文本）**\n\n**参数**: 无\n\n**返回值**: 列表类型（包含物品Lore的字符串列表）\n\n**注意**: 解析的文本会将 `!&!*` `!&!#` `!&!%` 替换为 `§*` `§#` `§%`') },
    { label: 'Tip.getItemStack()', detail: '获取当前Tip的物品对象', insertText: 'getItemStack()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取当前Tip的物品对象**\n\n**参数**: 无\n\n**返回值**: ItemStack对象') },
    // === ItemStack 物品对象 ===
    { label: 'ItemStack.getType()', detail: '获取物品类型', insertText: 'getType()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取物品类型**\n\n**参数**: 无\n\n**返回值**: 字符串类型') },
    { label: 'ItemStack.getCount()', detail: '获取物品数量', insertText: 'getCount()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取物品数量**\n\n**参数**: 无\n\n**返回值**: 整数类型') },
    { label: 'ItemStack.getName()', detail: '获取物品名称', insertText: 'getName()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取物品名称**\n\n**参数**: 无\n\n**返回值**: 字符串类型') },
    { label: 'ItemStack.getLore()', detail: '获取物品描述', insertText: 'getLore()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取物品描述**\n\n**参数**: 无\n\n**返回值**: 字符串列表类型') },
    { label: 'ItemStack.getNBT()', detail: '获取物品NBT数据', insertText: 'getNBT(${1:path})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取物品NBT数据**\n\n**参数**: path (NBT路径，多层级属性用.分割)\n\n**返回值**: 字符串类型\n\n**示例**: `物品对象.getNBT("model")`') },
    { label: 'ItemStack.getNBTList()', detail: '获取物品NBT列表', insertText: 'getNBTList(${1:path})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取物品NBT列表数据**\n\n**参数**: path (NBT路径，多层级属性用.分割)\n\n**返回值**: 列表类型\n\n**示例**: `物品对象.getNBTList("xxx")`') },
    { label: 'ItemStack.getNBTMap()', detail: '获取物品NBT字典', insertText: 'getNBTMap(${1:path})', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取物品NBT字典数据**\n\n**参数**: path (NBT路径，多层级属性用.分割)\n\n**返回值**: 字典类型\n\n**示例**: `物品对象.getNBTMap("xxx")`') },
    // === PotionEffect 药水效果对象 ===
    { label: 'PotionEffect.getCategory()', detail: '获取药水效果分类', insertText: 'getCategory()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取药水效果分类**\n\n**参数**: 无\n\n**返回值**: 字符串类型') },
    { label: 'PotionEffect.getDisplayName()', detail: '获取药水效果显示名称', insertText: 'getDisplayName()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取药水效果显示名称**\n\n**参数**: 无\n\n**返回值**: 字符串类型') },
    { label: 'PotionEffect.getDuration()', detail: '获取药水效果持续时间', insertText: 'getDuration()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取药水效果持续时间**\n\n**参数**: 无\n\n**返回值**: 整数类型（tick）') },
    { label: 'PotionEffect.getLevel()', detail: '获取药水效果等级', insertText: 'getLevel()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取药水效果等级**\n\n**参数**: 无\n\n**返回值**: 整数类型') },
    { label: 'PotionEffect.getTime()', detail: '获取药水效果持续秒数', insertText: 'getTime()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取药水效果持续时间（秒）**\n\n**参数**: 无\n\n**返回值**: 整数类型') },
    // === Player 玩家对象(实例方法) ===
    { label: 'Player.isDeath()', detail: '判断玩家是否死亡', insertText: 'isDeath()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否死亡**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isJumping()', detail: '判断玩家是否正在跳跃', insertText: 'isJumping()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否正在跳跃**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isRunning()', detail: '判断玩家是否正在奔跑', insertText: 'isRunning()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否正在奔跑**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isWalking()', detail: '判断玩家是否正在行走', insertText: 'isWalking()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否正在行走**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isSneaking()', detail: '判断玩家是否正在潜行', insertText: 'isSneaking()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否正在潜行**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isSprinting()', detail: '判断玩家是否在奔跑', insertText: 'isSprinting()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在奔跑**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isFallFlying()', detail: '判断玩家是否在滑翔', insertText: 'isFallFlying()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在滑翔**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isSwimming()', detail: '判断玩家是否在游泳', insertText: 'isSwimming()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在游泳**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isUnderWater()', detail: '判断玩家是否在水下', insertText: 'isUnderWater()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在水下**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isInLava()', detail: '判断玩家是否在岩浆中', insertText: 'isInLava()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在岩浆中**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isSleeping()', detail: '判断玩家是否在睡觉', insertText: 'isSleeping()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在睡觉**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isRidePig()', detail: '判断玩家是否骑在猪上', insertText: 'isRidePig()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否骑在猪上**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.inBoat()', detail: '判断玩家是否骑在船上', insertText: 'inBoat()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否骑在船上**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isRide()', detail: '判断玩家是否骑乘生物', insertText: 'isRide()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否骑乘生物**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isCrawl()', detail: '判断玩家是否在爬行', insertText: 'isCrawl()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在爬行**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isLadderUp()', detail: '判断玩家是否在向上攀爬梯子', insertText: 'isLadderUp()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在向上攀爬梯子**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isLadderDown()', detail: '判断玩家是否在向下攀爬梯子', insertText: 'isLadderDown()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在向下攀爬梯子**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isLadderIdle()', detail: '判断玩家是否在梯子上静止', insertText: 'isLadderIdle()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在梯子上静止不动**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isLeftSwing()', detail: '判断玩家是否正在左手挥舞', insertText: 'isLeftSwing()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否正在左手挥舞**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isRightSwing()', detail: '判断玩家是否正在右手挥舞', insertText: 'isRightSwing()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否正在右手挥舞**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isLeftEating()', detail: '判断玩家是否正在左手吃东西', insertText: 'isLeftEating()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否正在左手吃东西**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isRightEating()', detail: '判断玩家是否正在右手吃东西', insertText: 'isRightEating()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否正在右手吃东西**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.getHealth()', detail: '获取玩家生命值', insertText: 'getHealth()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家生命值**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Player.getMaxHealth()', detail: '获取玩家最大生命值', insertText: 'getMaxHealth()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家最大生命值**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Player.getPosX()', detail: '获取玩家X坐标', insertText: 'getPosX()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家X坐标**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Player.getPosY()', detail: '获取玩家Y坐标', insertText: 'getPosY()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家Y坐标**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Player.getPosZ()', detail: '获取玩家Z坐标', insertText: 'getPosZ()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家Z坐标**\n\n**参数**: 无\n\n**返回值**: 双精度浮点数类型') },
    { label: 'Player.getYaw()', detail: '获取玩家水平旋转角度', insertText: 'getYaw()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家水平旋转角度**\n\n**参数**: 无\n\n**返回值**: 单精度浮点数类型') },
    { label: 'Player.getPitch()', detail: '获取玩家垂直旋转角度', insertText: 'getPitch()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家垂直旋转角度**\n\n**参数**: 无\n\n**返回值**: 单精度浮点数类型') },
    { label: 'Player.isFlying()', detail: '判断玩家是否在飞行', insertText: 'isFlying()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在飞行**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.getFood()', detail: '获取玩家饱食度', insertText: 'getFood()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家饱食度**\n\n**参数**: 无\n\n**返回值**: 整数类型') },
    { label: 'Player.getAir()', detail: '获取玩家氧气值', insertText: 'getAir()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家氧气值**\n\n**参数**: 无\n\n**返回值**: 整数类型') },
    { label: 'Player.getArmor()', detail: '获取玩家护甲值', insertText: 'getArmor()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家护甲值**\n\n**参数**: 无\n\n**返回值**: 整数类型') },
    { label: 'Player.getCurrentItem()', detail: '获取玩家当前手持物品', insertText: 'getCurrentItem()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**获取玩家当前手持物品**\n\n**参数**: 无\n\n**返回值**: 物品对象') },
    { label: 'Player.isInWater()', detail: '判断玩家是否在水中', insertText: 'isInWater()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在水中**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
    { label: 'Player.isOnGround()', detail: '判断玩家是否在地面上', insertText: 'isOnGround()', kind: vscode.CompletionItemKind.Function, documentation: new vscode.MarkdownString('**判断玩家是否在地面上**\n\n**参数**: 无\n\n**返回值**: 布尔类型') },
];

// 支持的对象名称列表
export const builtin_objects = [
    'Shimmer', 'Math', 'String', 'Number', 'List', 'Map', 'UUID',
    // 动画插值
    'Lerp', 'Back', 'Bezier', 'Bounce', 'CircX', 'CircY', 'Elastic', 'Expo', 'Q2', 'Q3', 'Q4', 'Q5',
    'Sine', 'Smooth', 'Spring', 'Fade', 'TwoLerp', 'Blink', 'Breathe', 'Pulse', 'Shake', 'Swing', 'Wave', 'Slide',
    // 全局工具集
    'Cast', 'Chat', 'Display', 'Entity', 'Fog', 'Game', 'Keyboard',
    'Message', 'Name', 'Packet', 'Placeholder', 'Player', 'Potion',
    'Screen', 'Shader', 'Skybox', 'Sound', 'Thread', 'Time', 'Web',
    'Mouse', 'Camera',
    // 对象方法
    'Tip', 'ItemStack', 'PotionEffect'
];
