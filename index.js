const express = require('express')
const app = express()

const creams = [
  {
    id: 0,
    title: 'Lama Negra',
    description: 'Suavidad y brillo para cabellos oscuros y sin vida',
    price: '700',
    image: './images/cremas/Lama Negra.jpg'
  }, {
    id: 1,
    title: 'Mas Lisos',
    description: 'AntiFrizz para cabellos naturalmente lisos o alisados',
    price: '700',
    image: './images/cremas/Mais Lisos.jpg'
  }, {
    id: 2,
    title: 'Doña Skala',
    description: 'Hidratación y brillo para cabellos lisos u ondulados',
    price: '700',
    image: './images/cremas/Dona Skala.jpg'
  }, {
    id: 3,
    title: 'Babosa',
    description: 'Hidratación profunda para cabellos rizados',
    price: '700',
    image: './images/cremas/Babosa.jpg'
  }, {
    id: 4,
    title: 'Jaborandi',
    description: 'Hidratación y sorprendete fuerza para cabellos débiles',
    price: '700',
    image: './images/cremas/Jaborandi.jpg'
  }, {
    id: 5,
    title: 'Poción Divina',
    description: 'Hidratación, brillo y antifrizz. Aceites, keratina y colágeno',
    image: './images/cremas/Divino Potão.jpg',
    price: '700'
  }, {
    id: 6,
    title: 'Poción Divina Kids',
    description: 'Acción desenredante para cabellos ondulados y rizados',
    price: '700',
    image: './images/cremas/Divino Potinho.jpg'
  }, {
    id: 7,
    title: 'Poción Dormida',
    description: 'Cabellos hidratados, aliñados y sin frizz',
    image: './images/cremas/Potão Desmaiado.jpg',
    price: '700'
  }, {
    id: 8,
    title: 'Poción de Amor',
    description: 'Revitalización y renovación para cabellos dañados',
    price: '700',
    image: './images/cremas/Potão do Amor.jpg'
  }, {
    id: 9,
    title: 'Almidón de Maiz',
    description: 'Ultra reparación, fuerza y brillo para todo tipo de cabellos',
    price: '700',
    image: './images/cremas/Amido de Milho.jpg'
  }, {
    id: 10,
    title: 'Spa Naturals',
    description: 'Activación de crecimiento y puntas hidratadas',
    price: '700',
    image: './images/cremas/Spa Naturals.jpg'
  }, {
    id: 11,
    title: 'Bomba de Vitaminas',
    description: 'Bomba de vitaminas para todo tipo de cabellos',
    price: '700',
    image: './images/cremas/Bomba de Vitaminas.jpg'
  }, {
    id: 12,
    title: 'Brillo Increíble',
    description: 'Brillo increíble para todo tipo de cabellos',
    price: '700',
    image: './images/cremas/Brilho Incrivel.jpg'
  }, {
    id: 13,
    title: 'Restauración Total',
    description: 'Restauración espectacular para todo tipo de cabellos',
    price: '700',
    image: './images/cremas/Restauração Espectacular.jpg'
  }, {
    id: 14,
    title: 'Fuerza Extrema',
    description: 'Hidratación y fuerza extrema para cabellos rizados',
    price: '700',
    image: './images/cremas/Força Extrema.jpg'
  }, {
    id: 15,
    title: 'Fuerza Sorprendente',
    description: 'Fuerza y control de grasa para todo tipo de cabellos',
    price: '700',
    image: './images/cremas/Força Surpreendente.jpg'
  }, {
    id: 16,
    title: 'Aceite de Argon',
    description: 'Nutrición y revitalización para cabellos secos y opacos',
    price: '700',
    image: './images/cremas/Óleo de Argon.jpg'
  }, {
    id: 17,
    title: 'Aceite de Coco',
    description: 'Nutrición y revitalización profuda para cabellos secos y dañados',
    price: '700',
    image: './images/cremas/Óleo de Coco.jpg'
  }, {
    id: 18,
    title: 'Vinagre de Manzana',
    description: 'Brillo y reducción de porosidad para cabellos resecos y con frizz',
    price: '700',
    image: './images/cremas/Vinagre de Maçã.jpg'
  }, {
    id: 19,
    title: 'Arcilla Blanca',
    description: 'Brillo para cabellos secos y tratados químicamente',
    price: '700',
    image: './images/cremas/Arguila Branca.jpg'
  }, {
    id: 20,
    title: 'Mantega de Karité',
    description: 'Suavidad, sedosidad y brillo para cabellos resecos y fragiles',
    price: '700',
    image: './images/cremas/Manteiga de Karité.jpg'
  }, {
    id: 21,
    title: 'Cóctel Brasil',
    description: 'Nutrición y brillo con frutos del Amazonas',
    price: '700',
    image: './images/cremas/Coquetel Brasil.jpg'
  }, {
    id: 22,
    title: 'Maracujá',
    description: 'Crecimiento y fuerza a base maracujá y aceites de patauá',
    price: '700',
    image: './images/cremas/Brasil - Maracujá.jpg'
  }, {
    id: 23,
    title: 'Mango',
    description: 'Nutrición y brillo a base mango y castañas del Pará',
    price: '700',
    image: './images/cremas/Brasil - Manga.jpg'
  }, {
    id: 24,
    title: 'Caju',
    description: 'Resistencia y brillo a base de caju y murumuru',
    price: '700',
    image: './images/cremas/Brasil - Caju.jpg'
  }, {
    id: 25,
    title: 'Café Verde',
    description: 'Vitalidad y brillo a base de café verde y aceite de Ucuuba',
    price: '700',
    image: './images/cremas/Brasil - Café Verde.jpg'
  }, {
    id: 26,
    title: 'Banana',
    description: 'Reparación y brillo a base de banana y bacuri',
    price: '700',
    image: './images/cremas/Brasil - Banana.jpg'
  }
]

app.get('/', (request, response) => {
  response.json(creams)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log('API SKALA Ecommerce is ready, by Lukway')
})
