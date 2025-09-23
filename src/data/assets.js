// GitHub Issues asset URLs
// All images hosted via GitHub Issues for reliable access
export const assets = {
  // Project thumbnails
  'CLM1.jpg': 'https://github.com/user-attachments/assets/7ef7663f-e616-4299-9b98-da105b43b92b',
  'BG3.png': 'https://github.com/user-attachments/assets/304227f4-e54f-4649-be13-c2df63de29b3',
  'MH5.png': 'https://github.com/user-attachments/assets/ab0c6247-676e-44ca-a18e-3c8595d506ad',
  'IMG_0969.jpg': 'https://github.com/user-attachments/assets/6cbf3dae-7f93-49c7-8b10-07b0eda3dcdd',
  
  // About section
  'AB1.jpg': 'https://github.com/user-attachments/assets/7627c90e-2bb9-4731-a7a9-bfeef989a5e4',
  '3dScan.mov': 'https://github.com/user-attachments/assets/76a8c44b-1c4e-41f4-a303-3a1048ec9df2',
  
  // Kikkerland project images
  'CB1.jpg': 'https://github.com/user-attachments/assets/db786cae-7cd0-4b36-9004-e7d23c4618a2',
  'CB2.jpg': 'https://github.com/user-attachments/assets/8760e595-642c-413f-9ead-87189e9e496b',
  'CB3.jpg': 'https://github.com/user-attachments/assets/0ae3780e-adc0-4cef-b694-e66b22223579',
  'FP1.jpg': 'https://github.com/user-attachments/assets/1f5e4886-7aac-42d6-8c6f-d7bf84235d36',
  'FP2.jpg': 'https://github.com/user-attachments/assets/78f1b9c3-2d9e-4118-b515-8d04400189db',
  'FP3.jpg': 'https://github.com/user-attachments/assets/f224a4eb-2527-438e-a2d3-a474997cf794',
  'FP4.jpg': 'https://github.com/user-attachments/assets/27350153-ae4a-4d16-bf41-2109c645a741',
  'SP1.jpg': 'https://github.com/user-attachments/assets/35c93978-a89f-4511-b11e-c7d7b36697b4',
  'SP2.jpg': 'https://github.com/user-attachments/assets/fb76ed26-26a5-44a8-8910-f007cd73ddfb',
  'SP3.png': 'https://github.com/user-attachments/assets/f7a0a698-ca53-49c2-afd0-8583f69a783f',
  'CLM2.jpg': 'https://github.com/user-attachments/assets/28b8a428-2290-413e-b916-085b7ca875c4',
  'CLM3.jpg': 'https://github.com/user-attachments/assets/39166b36-ee71-4f06-831d-cdfc946d90fa',
  'CLM4.jpg': 'https://github.com/user-attachments/assets/9c4f4697-e6b9-4b89-b4ae-89f33a37c1b9',
  'CLM5.jpg': 'https://github.com/user-attachments/assets/88b70e4f-9572-4493-8c39-2c01cadf3ca5',
  'CLM6.jpg': 'https://github.com/user-attachments/assets/63a08e56-a267-4b95-bd06-f4000be90fc1',
  
  // Logo
  'EZMlogoWhite.svg': 'https://github.com/user-attachments/assets/6d6a906e-e1fc-4f41-9525-eb5c8e76e2e5',
};

// Helper function to get asset URL with fallback
export const getAssetUrl = (filename) => {
  // Try Google Drive first, fallback to local assets
  const driveUrl = assets[filename];
  if (driveUrl && !driveUrl.includes('YOUR_')) {
    return driveUrl;
  }
  // Fallback to local assets
  return `./assets/${filename}`;
};
