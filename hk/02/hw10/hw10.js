const { exec } = require('child_process');

function system(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function runShell() {
  while (true) {
    let cmd = prompt("shell>"); // 在浏览器环境中使用prompt输入命令
    if (cmd === 'exit') break;
    try {
      const { stdout, stderr } = await system(cmd);
      console.log(stdout);
      console.error(stderr);
    } catch (error) {
      console.error(error);
    }
  }
}

runShell();
