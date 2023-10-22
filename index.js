import fetch from "node-fetch";
import express from "express";
import Jimp from "jimp";

const app = express();
const PORT = process.env.PORT || 1234;

app.use(express.json());

app.get('/name/face/layer/:username', async (req, res) => {
  const username = req.params.username;
  const APIURL = `https://api.mojang.com/users/profiles/minecraft/${username}`;

  try {
    const response = await fetch(APIURL);
    const data = await response.json();
    const uuid = data.id;
    const skinUrl = `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}?unsigned=false`;
    const skinResponse = await fetch(skinUrl);
    const skinData = await skinResponse.json();
    const textures = skinData.properties[0].value;
    const decodedTextures = Buffer.from(textures, 'base64').toString('utf-8');
    const skinURL = JSON.parse(decodedTextures).textures.SKIN.url;
    const skinImageResponse = await fetch(skinURL);
    const skinImageArrayBuffer = await skinImageResponse.arrayBuffer();
    const skinImageBuffer = Buffer.from(skinImageArrayBuffer);
    const image = await Jimp.read(skinImageBuffer);
    const image2 = await Jimp.read(skinImageBuffer);
    const cropLeft = 8;
    const cropLeft2 = 40;
    const cropTop = 8;
    const cropTop2 = 8;
    const cropWidth = 8;
    const cropHeight = 8;
    image.crop(cropLeft, cropTop, cropWidth, cropHeight);
    image2.crop(cropLeft2, cropTop2, cropWidth, cropHeight);
    image.resize(160, 160, Jimp.RESIZE_NEAREST_NEIGHBOR);
    image2.resize(160, 160, Jimp.RESIZE_NEAREST_NEIGHBOR);
    image.composite(image2, 0, 0);
    const enlargedImageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    res.setHeader('Content-Type', 'image/png');
    res.send(enlargedImageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.get('/name/face/nolayer/:username', async (req, res) => {
  const username = req.params.username;
  const APIURL = `https://api.mojang.com/users/profiles/minecraft/${username}`;

  try {
    const response = await fetch(APIURL);
    const data = await response.json();
    const uuid = data.id;
    const skinUrl = `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}?unsigned=false`;
    const skinResponse = await fetch(skinUrl);
    const skinData = await skinResponse.json();
    const textures = skinData.properties[0].value;
    const decodedTextures = Buffer.from(textures, 'base64').toString('utf-8');
    const skinURL = JSON.parse(decodedTextures).textures.SKIN.url;
    const skinImageResponse = await fetch(skinURL);
    const skinImageArrayBuffer = await skinImageResponse.arrayBuffer();
    const skinImageBuffer = Buffer.from(skinImageArrayBuffer);
    const image = await Jimp.read(skinImageBuffer);
    const cropLeft = 8;
    const cropTop = 8;
    const cropWidth = 8;
    const cropHeight = 8;
    image.crop(cropLeft, cropTop, cropWidth, cropHeight);
    image.resize(160, 160, Jimp.RESIZE_NEAREST_NEIGHBOR);
    const enlargedImageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    res.setHeader('Content-Type', 'image/png');
    res.send(enlargedImageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.get('/name/skin/:username', async (req, res) => {
  const username = req.params.username;
  const APIURL = `https://api.mojang.com/users/profiles/minecraft/${username}`;

  try {
    const response = await fetch(APIURL);
    const data = await response.json();
    const uuid = data.id;
    const skinUrl = `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}?unsigned=false`;
    const skinResponse = await fetch(skinUrl);
    const skinData = await skinResponse.json();
    const textures = skinData.properties[0].value;
    const decodedTextures = Buffer.from(textures, 'base64').toString('utf-8');
    const skinURL = JSON.parse(decodedTextures).textures.SKIN.url;
    const skinImageResponse = await fetch(skinURL);
    const skinImageArrayBuffer = await skinImageResponse.arrayBuffer();
    const skinImageBuffer = Buffer.from(skinImageArrayBuffer);
    const image = await Jimp.read(skinImageBuffer);
    const enlargedImageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    res.setHeader('Content-Type', 'image/png');
    res.send(enlargedImageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.get('/uuid/face/layer/:uuid', async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const skinUrl = `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}?unsigned=false`;
    const skinResponse = await fetch(skinUrl);
    const skinData = await skinResponse.json();
    const textures = skinData.properties[0].value;
    const decodedTextures = Buffer.from(textures, 'base64').toString('utf-8');
    const skinURL = JSON.parse(decodedTextures).textures.SKIN.url;
    const skinImageResponse = await fetch(skinURL);
    const skinImageArrayBuffer = await skinImageResponse.arrayBuffer();
    const skinImageBuffer = Buffer.from(skinImageArrayBuffer);
    const image = await Jimp.read(skinImageBuffer);
    const image2 = await Jimp.read(skinImageBuffer);
    const cropLeft = 8;
    const cropLeft2 = 40;
    const cropTop = 8;
    const cropTop2 = 8;
    const cropWidth = 8;
    const cropHeight = 8;
    image.crop(cropLeft, cropTop, cropWidth, cropHeight);
    image2.crop(cropLeft2, cropTop2, cropWidth, cropHeight);
    image.resize(160, 160, Jimp.RESIZE_NEAREST_NEIGHBOR);
    image2.resize(160, 160, Jimp.RESIZE_NEAREST_NEIGHBOR);
    image.composite(image2, 0, 0);
    const enlargedImageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    res.setHeader('Content-Type', 'image/png');
    res.send(enlargedImageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.get('/uuid/face/nolayer/:uuid', async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const skinUrl = `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}?unsigned=false`;
    const skinResponse = await fetch(skinUrl);
    const skinData = await skinResponse.json();
    const textures = skinData.properties[0].value;
    const decodedTextures = Buffer.from(textures, 'base64').toString('utf-8');
    const skinURL = JSON.parse(decodedTextures).textures.SKIN.url;
    const skinImageResponse = await fetch(skinURL);
    const skinImageArrayBuffer = await skinImageResponse.arrayBuffer();
    const skinImageBuffer = Buffer.from(skinImageArrayBuffer);
    const image = await Jimp.read(skinImageBuffer);
    const cropLeft = 8;
    const cropTop = 8;
    const cropWidth = 8;
    const cropHeight = 8;
    image.crop(cropLeft, cropTop, cropWidth, cropHeight);
    image.resize(160, 160, Jimp.RESIZE_NEAREST_NEIGHBOR);
    const enlargedImageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    res.setHeader('Content-Type', 'image/png');
    res.send(enlargedImageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.get('/uuid/skin/:uuid', async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const skinUrl = `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}?unsigned=false`;
    const skinResponse = await fetch(skinUrl);
    const skinData = await skinResponse.json();
    const textures = skinData.properties[0].value;
    const decodedTextures = Buffer.from(textures, 'base64').toString('utf-8');
    const skinURL = JSON.parse(decodedTextures).textures.SKIN.url;
    const skinImageResponse = await fetch(skinURL);
    const skinImageArrayBuffer = await skinImageResponse.arrayBuffer();
    const skinImageBuffer = Buffer.from(skinImageArrayBuffer);
    const image = await Jimp.read(skinImageBuffer);
    const enlargedImageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    res.setHeader('Content-Type', 'image/png');
    res.send(enlargedImageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.get('/get/uuid/:username', async (req, res) => {
  const username = req.params.username;
  const APIURL = `https://api.mojang.com/users/profiles/minecraft/${username}`;

  try {
    const response = await fetch(APIURL);
    const data = await response.json();
    const uuid = data.id;
    res.setHeader('Content-Type', 'text/plain');
    res.send(uuid);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.get('/get/name/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  const APIURL = `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}?unsigned=false`;

  try {
    const response = await fetch(APIURL);
    const data = await response.json();
    const name = data.name;
    res.setHeader('Content-Type', 'text/plain');
    res.send(name);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
