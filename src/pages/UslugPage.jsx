import React, { useState } from "react"
import komp from "../homePage/img/komp.jpeg"
import gastr from "../homePage/img/gastr.jpg"
import heart from "../homePage/img/heart.jpg"
import "./uslug.css"
const UslugPage = () => {
  const [activeTab, setActiveTab] = useState('specialists');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="container">
    <h1>Услуги медицинского центра Авиценна</h1>
    <p>Клиника Авиценна – территория здоровья, где каждый пациент получает индивидуальный комплексный подход и доступ к лучшим медицинским технологиям.</p>
    <div className="tabs">
      <button
        className={`tab-btn ${activeTab === 'specialists' ? 'active' : ''}`}
        onClick={() => handleTabClick('specialists')}
      >
        Врачи-Специалисты
      </button>
      <button
        className={`tab-btn ${activeTab === 'diagnostics' ? 'active' : ''}`}
        onClick={() => handleTabClick('diagnostics')}
      >
        Диагностика
      </button>
      <button
        className={`tab-btn ${activeTab === 'procedures' ? 'active' : ''}`}
        onClick={() => handleTabClick('procedures')}
      >
        Лечебные Процедуры
      </button>
      <button
        className={`tab-btn ${activeTab === 'prevention' ? 'active' : ''}`}
        onClick={() => handleTabClick('prevention')}
      >
        Профилактика И Вакцинация
      </button>
    </div>

    <div id="specialists" className={`tab-content ${activeTab === 'specialists' ? 'active' : ''}`}>
      <h2>Врачи-Специалисты</h2>
      <div className="service">
        <img src={komp} alt="Компьютерная томография" />
        <h3>КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ</h3>
      </div>
      <div className="service">
        <img src={gastr} alt="Гастроскопия" />
        <h3>ГАСТРОСКОПИЯ (ЭГДС)</h3>
      </div>
      <div className="service">
        <img src={heart} alt="Суточный мониторинг сердца" />
        <h3>СУТОЧНЫЙ МОНИТОРИНГ СЕРДЦА</h3>
      </div>
    </div>

    <div id="diagnostics" className={`tab-content ${activeTab === 'diagnostics' ? 'active' : ''}`}>
      <h2>Диагностика</h2>
      <div className="service">
      <img src={komp} alt="Компьютерная томография" />
        <h3>КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ</h3>
      </div>
      <div className="service">
        <img src={gastr} alt="Гастроскопия" />
        <h3>ГАСТРОСКОПИЯ (ЭГДС)</h3>
      </div>
      <div className="service">
        <img src={heart} alt="Суточный мониторинг сердца" />
        <h3>СУТОЧНЫЙ МОНИТОРИНГ СЕРДЦА</h3>
      </div>
    </div>

    <div id="procedures" className={`tab-content ${activeTab === 'procedures' ? 'active' : ''}`}>
      <h2>Лечебные Процедуры</h2>
      <div className="service">
      <img src={komp} alt="Компьютерная томография" />
        <h3>КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ</h3>
      </div>
      <div className="service">
      <img src={gastr} alt="Гастроскопия" />
        <h3>ГАСТРОСКОПИЯ (ЭГДС)</h3>
      </div>
      <div className="service">
      <img src={heart} alt="Суточный мониторинг сердца" />
        <h3>СУТОЧНЫЙ МОНИТОРИНГ СЕРДЦА</h3>
      </div>
    </div>

    <div id="prevention" className={`tab-content ${activeTab === 'prevention' ? 'active' : ''}`}>
      <h2>Профилактика И Вакцинация</h2>
      <div className="service">
      <img src={komp} alt="Компьютерная томография" />
        <h3>КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ</h3>
      </div>
      <div className="service"> 
      <img src={gastr} alt="Гастроскопия" />
        <h3>ГАСТРОСКОПИЯ (ЭГДС)</h3>
      </div>
      <div className="service">
      <img src={heart} alt="Суточный мониторинг сердца" />
        <h3>СУТОЧНЫЙ МОНИТОРИНГ СЕРДЦА</h3>
      </div>
    </div>
  </div>
  )
}

export default UslugPage
