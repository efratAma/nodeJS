
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log(`זמן לפני השינה: ${new Date().toISOString()}`);
    
    await sleep(2000); 

    console.log(`זמן אחרי השינה: ${new Date().toISOString()}`);
}

main();
