const React = require('react')
const Default = require('./layouts/default')

function Index({ breads }) {
    return (
      <Default>
        <h2>Index Page</h2>
        {
            breads.map(function(bread, index) {
                return (
                    <li key={index}>
                        <a href={`/breads/${index}`}>
                            {bread.name}
                        </a>
                    </li>
                )
            })
        }
      </Default>
    )
}

module.exports = Index