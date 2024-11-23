const path = require('path');
const fs = require('fs');

const uploadDir = path.resolve(__dirname, '../../uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

module.exports = {
    async uploadImage(req, res) {
        try {
            const { image } = req.body;

            if (!image) {
                return res.json({error: true,message: "Imagem não identificada"});
            }

            const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
            const buffer = Buffer.from(base64Data, 'base64');

            const fileName = `image_${Date.now()}.png`;
            const filePath = path.join(uploadDir, fileName);

            fs.writeFileSync(filePath, buffer);

            return res.status(200).json({icon: `${fileName}`});
        } catch (error) {
            console.error(excerpt);
            return res.json({ error: true, message: "Falha ao realizar upload" });
        }
    }
};
