# 终端配置

## bash配置
```bash
if [[ $PATH != "$HOME/bin"* ]]; then
  PATH=~/bin:/usr/local/bin:/usr/local/sbin:`echo $PATH|sed -e "s!:$HOME/bin!!" -e 's!:/usr/local/bin!!'`
fi

export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home

export M2_HOME="/Applications/IntelliJ IDEA.app/Contents/plugins/maven/lib/maven3"
export PATH=$PATH:$M2_HOME/bin

export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH=~/soft/flutter/bin:$PATH
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles
export PATH="/usr/local/opt/mysql-client/bin:$PATH"

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"

# >>> coursier install directory >>>
export PATH="$PATH:/Users/chengliu/Library/Application Support/Coursier/bin"
# <<< coursier install directory <<<

export CLICOLOR=1
export LSCOLORS=ExGxFxdaCxDaDahhadeche
function git_branch {
    branch="`git branch 2>/dev/null | grep "^\*" | sed -e "s/^\*\ //"`"
    if [ "${branch}" != "" ];then
        if [ "${branch}" = "(no branch)" ];then
            branch="(`git rev-parse --short HEAD`...)"
        fi
        echo " ($branch)"
    fi
}
export PS1='\[\033[01;32m\]➝ \[\033[01;36m\]\W\[\033[01;32m\]$(git_branch) \[\033[01;36m\]\$\[\033[00m\] '
```