const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Read the HTML content from a file
const htmlFilePath = "./Inputhtmlacc.js"
const html = fs.readFileSync(htmlFilePath, 'utf8');

const $ = cheerio.load(html );

function extractTextFromHTML($element) {
  const text = $element.contents()
    .filter(function () {
      return this.nodeType === 3; // Filter out non-text nodes
    })
    .text()
    .trim()
    .replace(/\([^)]*\)/g, '') // Remove text inside parentheses ()
    .replace(/\{[^}]*\}/g, '')   // Remove text inside curly braces {}
    .trim();

  return text.length > 0 ? text : undefined; // Return undefined if text is empty
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
    text: extractTextFromHTML($(element)),
    children: [],
    ...element.attribs,
  };

   
  const children = element.children.filter((child) => child.type === 'tag');
  if (children.length > 0) {
    result.children = children.map((child) => parseElement(child));
  }

  // Remove the "children" property if it's an empty array
  if (!result.children || result.children.length === 0) {
    delete result.children;
  }
  delete result['classname'];
  return result;
}

const jsonResult = parseElement($('div')[0]); // Assuming the root element is a div


const finalResult = {
  ui: {
    layout: "", 
    root:[jsonResult] ,
  },
};

const jsonString = JSON.stringify(finalResult, null, 2);

const filePath = 'D:\\freightflowdemo\\public\\ui\\order_management\\cancellation.json';

// // Write the JSON string to the file
fs.writeFileSync(filePath, jsonString);
// const jsonString = JSON.stringify([jsonResult], null, 2);
// console.log(jsonString)