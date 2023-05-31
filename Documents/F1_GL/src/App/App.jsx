import { useState } from 'react'
import { Header } from '../Header/Header'
import { Banners } from '../Banners/Banners'

export default function App() {
  return (
    <>
      <Header />
      <Banners />
      <body>
        <table>
          <tbody>
            <tr>
              <td>Ali</td>
              <td>5</td>
              <td>5</td>
              <td>65</td>
            </tr>
            <tr>
              <td>Ed</td>
              <td>5</td>
              <td>5</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Jack</td>
              <td>5</td>
              <td>5</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Toby</td>
              <td>5</td>
              <td>5</td>
              <td>35</td>
            </tr>
            <tr>
              <td>Tom</td>
              <td>5</td>
              <td>5</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Owen</td>
              <td>5</td>
              <td>5</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>
        <div>
          <h3 className="subtitles">Upcoming races:</h3>
          <ul>
            <li>Miami</li>
            <li>Spain</li>
            <li>Japan</li>
          </ul>
        </div>
        <div>
          <h3 className="subtitles">Previous races:</h3>
          <ul>
            <li>Bahrain</li>
            <li>Baku</li>
            <li>Monaco</li>
          </ul>
        </div>
      </body>
    </>
  )
}
