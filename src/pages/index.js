import * as React from "react"

import Layout from "../components/Layout"
import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"
import Paragraph from "../components/Paragraph"
import Statistics from "../components/Statistics"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import * as s from "../components/index.module.scss"
import Container from "../components/Container"
import AfishaCard from "../components/AfishaCard"

const IndexPage = () => (
  <Layout>
    <Seo title="Главная" />
    <div className={s.section}>
      <section className={s.banner}>
        <div className={s.bannerText}>
          <h1>Moscow Blues Chelsea FC</h1>
          <h4>Официальный фан-клуб ФК Челси в Москве</h4>
        </div>
        <div className={s.bannerActions}>
          <Button label="Поддержать проект" />
          <Button label="Оформить членство" />
        </div>
      </section>
      <section className={s.about} id="#about">
        <Container className={s.sectionContainer}>
          <SectionTitle>О нас</SectionTitle>
          <div className={s.aboutTwoCol}>
            <Paragraph className={s.aboutText}>
              Фан-клуб Moscow Blues — это не только совместные просмотры матчей
              в баре, но и дружное сообщество единомышленников.
            </Paragraph>
            <div className={s.aboutStat}>
              <Statistics
                num="4000"
                text="Подписчиков социальных сетях"
                buttonLabel="Подписаться"
                buttonLink="https://linktr.ee/moscowblues"
              />
              <Statistics
                num="700"
                text="Членов фан-клуба Moscow Blues"
                buttonLabel="Вступить"
                buttonLink="https://www.chelseafc.com/en/supporters-clubs/club-details/moscow_blues_officialsupportersclub"
              />
              <Statistics
                num="1500"
                text="Посетителей наших мероприятий"
                buttonLabel="Афиша"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className={s.afisha}>
        <Container className={s.sectionContainer}>
          <SectionTitle className={s.afishaTitle}>Афиша</SectionTitle>
          <div className={s.afishaTwoCol}>
            <StaticImage alt="" src="../images/photos/photo-a.jpg" />
            <div className={s.afishaCards}>
              <AfishaCard
                title="Просмотр матчей"
                text="Попасть на просмотр может любой желающий. 
                Требуется предварительная регистрация."
                buttonLabel="Регистрация"
                buttonLink="https://t.me/moscow_blues"
              />
              <AfishaCard
                title="Медиасобытия"
                text="Видео и фото-репортажи с мероприятий, влоги, подкасты — следите за нами во всех социальных платформах! "
                buttonLabel="Подписаться"
                buttonLink="https://linktr.ee/moscowblues"
              />
              <AfishaCard
                title="Просмотр матчей"
                text="Помимо просмотров матчей, мы также рады организовывать разного рода мероприятия, такие как FIFA-турниры, интеллектуальные викторины, совместные выезды, и др.. Stay tuned!"
                buttonLabel="Подробнее"
                buttonLink="https://t.me/moscow_blues"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className={s.whoAreWe}>
        <Container className={s.sectionContainer}>
          <SectionTitle className={s.whoAreWeTitle}>Кто мы</SectionTitle>
          <Paragraph>Просто посмотрите, кто мы есть</Paragraph>

          <div className={s.whoAreWeTwoCol}>
            <StaticImage alt="" src="../images/whoAreCard.png" />

            <div className={s.whoAreWeVideo}>
              <iframe
                width="450"
                height="300"
                src="https://www.youtube.com/embed/WIpCZQSHsYQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <Button label="Оформить членство" />
        </Container>
      </section>
    </div>
  </Layout>
)

export default IndexPage
