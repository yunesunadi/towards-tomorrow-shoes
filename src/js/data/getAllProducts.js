const client = contentful.createClient({
    space: "7aznzhf8xivn",
    accessToken: "y-y0d8uRA8ef83WNTDg0ouQexwo00BHBzVwdFABEZ6k",
});

const getAllProducts = async () => {
    try {
        const response = await client.getEntries({
            content_type: "ttsProducts",
            order: "sys.createdAt",
        });

        return response.items.map(({ fields }) => {
            const imageUrls = fields.images.map(
                (image) => image.fields.file.url
            );

            const availableColorUrls = fields.availableColors.map(
                (availableColor) => availableColor.fields.file.url
            );

            delete fields.images;
            delete fields.availableColors;

            return { ...fields, imageUrls, availableColorUrls };
        });
    } catch (err) {
        console.log(err);
    }
};

export default getAllProducts;
