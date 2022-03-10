// Required HTML for generating an manager card and top part of the HTML file.
// Using tailwind css framework.
function mainCard(team) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <title>Team Profile Generator</title>
  </head>
  <body class="font-serif bg-gray-200">
      <header class="shadow-lg p-8 font-medium text-center text-6xl bg-indigo-100 text-gray-700">Team Profile Generator</header>
      <main class="grid grid-cols-3">
        <section class="col-span-1 m-8 shadow-lg">
            <h2 class="font-semibold bg-indigo-600 text-white px-6 py-4 text-4xl">${team.getName()}</h2>
            <h3 class="font-medium bg-blue-300 text-indigo-900 px-4 py-4 text-3xl">Manager</h3>
            <ul class="bg-white p-2 text-2xl">
                <li class="font-medium text-gray-700 bg-blue-200 my-2 p-2 shadow-md border-4 border-blue-400 hover:bg-blue-100 hover:border-blue-300"><a href="mailto:${team.getEmail()}">email:${team.getEmail()}</a></li>
                <li class="font-medium text-gray-700 bg-blue-200 my-2 p-2 shadow-md border-4 border-blue-400 hover:bg-blue-100 hover:border-blue-300">ID Number:${team.getId()}</li>
                <li class="font-medium text-gray-700 bg-blue-200 my-2 p-2 shadow-md border-4 border-blue-400 hover:bg-blue-100 hover:border-blue-300">Office Number:${team.getOffice()}</li>
            </ul>
        </section>
`;
}

module.exports = mainCard;
