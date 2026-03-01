#!/bin/bash

# 检查TRAE编辑器是否存在
if [ -f "/Applications/Trae CN.app/Contents/Resources/app/bin/trae" ]; then
    echo "TRAE编辑器已找到，正在设置命令行别名..."
    
    # 检查.zshrc文件中是否已包含TRAE路径
    if grep -q "Trae CN.app" ~/.zshrc; then
        echo "TRAE路径已存在于.zshrc文件中"
    else
        # 添加TRAE路径到.zshrc文件
        echo 'export PATH="/Applications/Trae CN.app/Contents/Resources/app/bin:$PATH"' >> ~/.zshrc
        echo "TRAE路径已添加到.zshrc文件"
    fi
    
    # 重新加载.zshrc文件
    source ~/.zshrc
    echo "设置完成！现在可以使用 'trae' 命令在终端中打开TRAE编辑器"
    echo "例如：trae .  # 在当前目录打开TRAE"
else
    echo "错误：未找到TRAE编辑器，请确保已安装Trae CN.app"
fi