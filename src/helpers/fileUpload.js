export const fileUpload = async (file) => {
    if (!file) throw new Error('No se recibió el archivo para subir');

    const cloudURL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD}/upload`;
    const formData = new FormData();
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_PRESET);
    formData.append('file', file);

    try {
        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });

        if(!resp.ok) throw new Error('No fue posible subir el archivo. Intente más tarde');

        const cloudResp = await resp.json(resp);
        return cloudResp.secure_url;
    } catch (error) {
        throw new Error(error.message);
    }
}