# vim 配置

## 插件
配置
```bash
syntax on	" 自动语法高亮
set number " 显示行号
set cindent
set smartindent " 开启新行时使用智能自动缩进
set showmatch " 插入括号时，短暂地跳转到匹配的对应括号
set ruler " 打开状态栏标尺
:set mouse=a "在vim所有模式下开鼠标，复制文档就可以不包含行号了
set tabstop=4
set autoindent
set shiftwidth=4
set expandtab
set softtabstop=4
set cursorline " 设置显示这一横杠

call plug#begin()
Plug 'vim-airline/vim-airline'
Plug 'tpope/vim-fugitive'
Plug 'vim-airline/vim-airline-themes'
call plug#end()

" 总是显示状态栏
let g:airline_powerline_fonts = 1   " 使用powerline打过补丁的字体
let g:airline_theme="dark"      " 设置主题
let g:airline#extensions#tabline#enabled = 1
```

> airline需要正常显示需要安装powerline font字体