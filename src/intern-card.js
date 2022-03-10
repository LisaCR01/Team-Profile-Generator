// Required HTML for generating an intern card.
// Using tailwind css framework.
function generateInternCard (team){
    return `
    <section class="col-span-1 m-8 shadow-lg ">
            <h2 class="font-semibold bg-indigo-600 text-white px-4 py-4 text-4xl">${team.getName()}</h2>
            <h3 class="font-medium bg-blue-300 text-indigo-900 px-4 py-4 text-3xl">Intern</h3>
            <ul class="bg-white p-2 text-2xl">
                <li class="font-medium text-gray-700 bg-blue-200 my-2 p-2 shadow-md border-4 border-blue-400 hover:bg-blue-100 hover:border-blue-300"><a href="mailto:${team.getEmail()}">email:${team.getEmail()}</a></li>
                <li class="font-medium text-gray-700 bg-blue-200 my-2 p-2 shadow-md border-4 border-blue-400 hover:bg-blue-100 hover:border-blue-300">ID Number: ${team.getId()}</li>
                <li class="font-medium text-gray-700 bg-blue-200 my-2 p-2 shadow-md border-4 border-blue-400 hover:bg-blue-100 hover:border-blue-300">School: ${team.getSchool()} </li>
            </ul>
    </section>
    `
}

module.exports = generateInternCard