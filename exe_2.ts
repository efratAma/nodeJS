
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log(`time before sleep: ${new Date().toISOString()}`);
    
    await sleep(2000); 

    console.log(`time afrer sleep: ${new Date().toISOString()}`);
}

main();
