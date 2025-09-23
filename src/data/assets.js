// Google Drive asset URLs
// Replace these FILE_IDs with your actual Google Drive file IDs
export const assets = {
  // Project thumbnails
  'CLM1.jpg': 'https://drive.google.com/uc?export=view&id=1AKNmFJ75ttXxfMohtMHVfqUp8J1QDLg5',
  'BG3.png': 'https://drive.google.com/uc?export=view&id=1GhLieHf46fzvvtJAF1oB2XV5UwaqUVI0',
  'MH5.png': 'https://drive.google.com/1XxSDoVkLi8v2d37c7CePG3V4EKz62C1z',
  'IMG_0969.jpg': 'https://drive.google.com/uc?export=view&id=1CvJ0OrxkOVJPwvaTgY9yPwvYyhY74Q_J',
  
  // About section
  'AB1.jpg': 'https://drive.google.com/uc?export=view&id=1YuHGkInRuNN8tYe6t_J7VETwH6A1SCCh',
  '3dScan.mov': 'https://drive.google.com/uc?export=view&id=1BNmPz3kZvM8WdJJEAJAX2Kslrg9ajQcL',
  
  // Kikkerland project images
  'CB1.jpg': 'https://drive.google.com/uc?export=view&id=1sT6wMsGBx3Dy-JYP5PZoAo_eFROGaOzJ',
  'CB2.jpg': 'https://drive.google.com/uc?export=view&id=1KrcjXw-qi-ffEOl8oFU974sTHr2s3VV3',
  'CB3.jpg': 'https://drive.google.com/uc?export=view&id=1fZg4z7wQjh4VGnzzpiQAbn3gzR17QF2k',
  'FP1.jpg': 'https://drive.google.com/uc?export=view&id=1hiGjTrGJsZijxhkAOqRA-dAnIJUeyHqR',
  'FP2.jpg': 'https://drive.google.com/uc?export=view&id=1tjgzQYlO5WGsPOlrGjqiYQmNKsiQ8nOC',
  'FP3.jpg': 'https://drive.google.com/uc?export=view&id=16ShQXAfOJYwTTXK2b0q5Gu9qNXHQYXMO',
  'FP4.jpg': 'https://drive.google.com/uc?export=view&id=1bz-oyIqV5EJH8gahE-NrkkAmiSMt73bw',
  'SP1.jpg': 'https://drive.google.com/uc?export=view&id=1dbGBymaTNIINCk6muNzmN-vIWv2BYRMF',
  'SP2.jpg': 'https://drive.google.com/uc?export=view&id=1pj7ETXR_zP_c6DAUhvLBrKfDRjD733s4',
  'SP3.png': 'https://drive.google.com/uc?export=view&id=1b7xSh1cTKv5sYbI9NE2vdP65GRUuIUlE',
  'CLM2.jpg': 'https://drive.google.com/uc?export=view&id=1DMieRWb7aoPv8BgMjdQmxKJinZ3fBzr7',
  'CLM3.jpg': 'https://drive.google.com/uc?export=view&id=1N5Z0kJEPqmiA391qX9jwCp0vnejqLXoC',
  'CLM4.jpg': 'https://drive.google.com/uc?export=view&id=1YnsBf18_4fDg4w3TOH88LaR6ljqvtFZH',
  'CLM5.jpg': 'https://drive.google.com/uc?export=view&id=1HPGO9dJg00Cawf2kyoppaQ_2ggSAvQ-H',
  'CLM6.jpg': 'https://drive.google.com/uc?export=view&id=146as4Lc_NJCaO877xzmKUadZBzeSxA0e',
  
  // Logo
  'EZMlogoWhite.svg': 'https://drive.google.com/uc?export=view&id=1AqKIc-VuDGXYdLdQWGBvt0C1tCbK7ebL',
};

// Helper function to get asset URL
export const getAssetUrl = (filename) => {
  return assets[filename] || `./assets/${filename}`; // fallback to local if not found
};
