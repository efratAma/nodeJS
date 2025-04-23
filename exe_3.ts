const fs = require('fs/promises'); 
const path = require('path');

const folderPath = './folder'; 
async function func() {
  try {
    const files = await fs.readdir(folderPath); 
    for (let i = 0; i < files.length; i++) {
      const filePath = path.join(folderPath, files[i]);
      const content = await fs.readFile(filePath, 'utf8');
      console.log(`the file ${files[i]}:`);
      console.log(content);
    }

  } catch (err) {
    console.error('שגיאה:', err);
  }
}

func();