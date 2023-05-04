export const useReader = () => {

    const onDecode = (text) => {
        console.log(`Decode text from QR code is ${text}`)
    }

    const onLoaded = () => {
       console.log(`Ready to start scanning barcodes`)
    }

    return {
        onDecode,
        onLoaded
    }
}