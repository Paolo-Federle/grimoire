export default function SpellFactorTable() {
    return (
      <div className="overflow-x-auto p-4">
        <table className='spacing-table'>
          <thead>
            <tr className='table-row'>
              <th className="border border-gray-500 p-2 white-border-tr" rowSpan={3}>Penality</th>
              <th className="border border-gray-500 p-2 white-border-tr" rowSpan={3}>Potence</th>
              <th className="border border-gray-500 p-2 white-border-tr" colSpan={6}>Target</th>
              <th className="border border-gray-500 p-2 white-border-tr" colSpan={3}>Duration</th>
            </tr>
            <tr className='table-row'>
              <th className="border border-gray-500 p-2 white-border-tr" colSpan={2}>Subjects</th>
              <th className="border border-gray-500 p-2 white-border-tr" colSpan={2}>Radius (m)</th>
              <th className="border border-gray-500 p-2 white-border-tr" colSpan={2}>Volume (m³)</th>
              <th className="border border-gray-500 p-2 white-border-tr" rowSpan={2}>Transitory</th>
              <th className="border border-gray-500 p-2 white-border-tr" rowSpan={2}>Extended</th>
              <th className="border border-gray-500 p-2 white-border-tr" rowSpan={2}>Extended and advanced</th>
            </tr>
            <tr className='table-row'>
              <th className="border border-gray-500 p-2 white-border-tr">Size</th>
              <th className="border border-gray-500 p-2 white-border-tr">Number</th>
              <th className="border border-gray-500 p-2 white-border-tr">Normal</th>
              <th className="border border-gray-500 p-2 white-border-tr">Advanced</th>
              <th className="border border-gray-500 p-2 white-border-tr">Normal</th>
              <th className="border border-gray-500 p-2 white-border-tr">Advanced</th>
            </tr>
          </thead>
          <tbody>
            {[
              { penalty: 0, power: 1, size: "1-20", number: 1, radiusNormal: 1, radiusAdvanced: 1, volumeNormal: 5, volumeAdvanced: 5, transitory: "1 turno", extended: "1 scena/ora", advanced: "1 scena/ora" },
              { penalty: -2, power: 2, size: "21-30", number: 2, radiusNormal: 2, radiusAdvanced: 4, volumeNormal: 10, volumeAdvanced: 20, transitory: "2 turni", extended: "2 ore", advanced: "24 ore" },
              { penalty: -4, power: 3, size: "31-40", number: 4, radiusNormal: 4, radiusAdvanced: 16, volumeNormal: 20, volumeAdvanced: 80, transitory: "3 turni", extended: "12 ore", advanced: "2 giorni" },
              { penalty: -6, power: 4, size: "41-50", number: 8, radiusNormal: 8, radiusAdvanced: 64, volumeNormal: 40, volumeAdvanced: 320, transitory: "5 turni", extended: "24 ore", advanced: "1 settimana" },
              { penalty: -8, power: 5, size: "51-60", number: 16, radiusNormal: 16, radiusAdvanced: 256, volumeNormal: 80, volumeAdvanced: 1280, transitory: "10 turni", extended: "2 giorni", advanced: "1 mese" }
            ].map((row, index) => (
              <tr key={index} className="alternating-row">
                <td className="border border-gray-500 p-2">{row.penalty}</td>
                <td className="border border-gray-500 p-2">{row.power}</td>
                <td className="border border-gray-500 p-2">{row.size}</td>
                <td className="border border-gray-500 p-2">{row.number}</td>
                <td className="border border-gray-500 p-2">{row.radiusNormal}</td>
                <td className="border border-gray-500 p-2">{row.radiusAdvanced}</td>
                <td className="border border-gray-500 p-2">{row.volumeNormal}</td>
                <td className="border border-gray-500 p-2">{row.volumeAdvanced}</td>
                <td className="border border-gray-500 p-2">{row.transitory}</td>
                <td className="border border-gray-500 p-2">{row.extended}</td>
                <td className="border border-gray-500 p-2">{row.advanced}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className='table-row'>
              <td className="border border-gray-500 p-2">-2</td>
              <td className="border border-gray-500 p-2">+1</td>
              <td className="border border-gray-500 p-2">+10</td>
              <td className="border border-gray-500 p-2">x2</td>
              <td className="border border-gray-500 p-2">x2</td>
              <td className="border border-gray-500 p-2">x4</td>
              <td className="border border-gray-500 p-2">x2</td>
              <td className="border border-gray-500 p-2">x4</td>
              <td className="border border-gray-500 p-2">+10</td>
              <td className="border border-gray-500 p-2">+2 giorni</td>
              <td className="border border-gray-500 p-2">Indefinita</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
  