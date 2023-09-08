const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const htmlFilePath = './Inputhtml.js'
const html = fs.readFileSync(htmlFilePath, 'utf8');

const $ = cheerio.load(htmlFilePath);

function extractTextFromHTML($element) {
  return $element.text().trim();
}

function extractClassesFromHTML($element) {
  let classes = '';
  $element.each(function () {
    const classAttribute = $(this).attr('classname');
    if (classAttribute) {
      classes += ` ${classAttribute}`;
    }
  }
  
  );
  return classes.trim();
}


function parseElement(element) {
  
  const result = {
    tag: element.name,
    class: extractClassesFromHTML($(element)),
    text:extractTextFromHTML($(element)),
    children: [],
  };
console.log( cheerio.text);
   
  element.children.forEach((child) => {
    if (child.type === 'tag') {
      result.children.push(parseElement(child));
    }
  });

  return result;
}

const jsonResult = parseElement($('div')[0]); // Assuming the root element is a div

// Create a new object with the desired structure
const finalResult = {
  ui: {
    layout: "", // Add your desired layout value here
    root:[jsonResult] ,
  },
};

const jsonString = JSON.stringify(finalResult, null, 2);

const filePath = 'D:\\freightflowdemo\\public\\ui\\order_management\\support.json';

// // Write the JSON string to the file
fs.writeFileSync(filePath, jsonString);
// const jsonString = JSON.stringify([jsonResult], null, 2);
// console.log(jsonString)