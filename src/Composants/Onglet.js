import React, { useState } from "react";
import "./Onglet.css";

export default function Onglet() {
  const [toggleState, setToggleState] = useState(1);

  const goFr = () => {
    setToggleState(1);
  };

  const goEn = () => {
    setToggleState(2);
  };

  return (
    <div>
      <div className="contBtn">
        <div
          onClick={goFr}
          className={`onglets ${toggleState === 1 ? "active" : ""}`}
        >
          Français
        </div>
        <div
          onClick={goEn}
          className={`onglets ${toggleState === 2 ? "active" : ""}`}
        >
          Anglais
        </div>
      </div>
      <div className="container">
        {toggleState === 1 ? (
          <p className="contenu fr">
            FR Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nesciunt, similique assumenda accusamus, autem adipisci excepturi
            maxime, consectetur sint asperiores suscipit non quidem commodi nisi
            dolorem quo est unde tempora ipsum ea blanditiis id quibusdam vitae
            et omnis. Dolores nobis est neque fuga, harum cumque rem numquam
            nisi ipsum architecto libero eligendi veniam molestias laudantium
            aliquam, ducimus consectetur, fugiat voluptates officia. Nam
            pariatur eligendi incidunt dolore, quo, reprehenderit, quasi
            voluptas officiis inventore voluptate aperiam odio minus tempore
            quae adipisci. Possimus, excepturi! Dolorem earum, impedit
            exercitationem in voluptate error numquam, excepturi ipsam natus
            ratione officia magni repellat quos
          </p>
        ) : (
          <p className="contenu en">
            EN Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nesciunt, similique assumenda accusamus, autem adipisci excepturi
            maxime, consectetur sint asperiores suscipit non quidem commodi nisi
            dolorem quo est unde tempora ipsum ea blanditiis id quibusdam vitae
            et omnis. Dolores nobis est neque fuga, harum cumque rem numquam
            nisi ipsum architecto libero eligendi veniam molestias laudantium
            aliquam, ducimus consectetur, fugiat voluptates officia. Nam
            pariatur eligendi incidunt dolore, quo, reprehenderit, quasi
            voluptas officiis inventore voluptate aperiam odio minus tempore
            quae adipisci. Possimus, excepturi! Dolorem earum, impedit
            exercitationem in voluptate error numquam, excepturi ipsam natus
            ratione officia magni repellat quos
          </p>
        )}
      </div>
    </div>
  );
}
