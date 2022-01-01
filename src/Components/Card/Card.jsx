import React, { useState } from "react";
import "./Card.scss";

export default function Card({ data }) {
  const [datas, setdatas] = useState();

  function propsToParent(e) {
    const id = e.target.id;
    setdatas(id);
  }

  
 


  return (
    <div className="card">
      {data.map((item) => (
        <div
          className="card_container"
          key={item.nomor}
          id={item.nomor}
          onClick={propsToParent}
        >
          <div className="number_surah" id={item.nomor} onClick={propsToParent}>
            {item.nomor}
          </div>
          <div className="flex-1" id={item.nomor} onClick={propsToParent}>
            <div className="flex-2" id={item.nomor} onClick={propsToParent}>
              <div
                className="surah_name"
                id={item.nomor}
                onClick={propsToParent}
              >
                {item.nama}
              </div>
              <div
                className="ayat_surah"
                id={item.nomor}
                onClick={propsToParent}
              >{`(${item.ayat})`}</div>
            </div>
            <div className="arti_surah" id={item.nomor} onClick={propsToParent}>
              {item.arti}
            </div>
          </div>
          <div className="asma">{item.asma}</div>
        </div>
      ))}
    </div>
  );
}
