const express = require('express')
const cors = require('cors')
const app = express()
const mercadopago = require('mercadopago')

const data = {
  products: [
    {
      id: 0,
      title: 'Lama Negra',
      description: 'Suavidad y brillo para cabellos oscuros y sin vida',
      price: 700,
      quantity: 1,
      image: './images/cremas/Lama Negra.jpg',
      category: 'expert',
      onfire: true
    }, {
      id: 1,
      title: 'Mas Lisos',
      description: 'AntiFrizz para cabellos naturalmente lisos o alisados',
      price: 700,
      quantity: 1,
      image: './images/cremas/Mais Lisos.jpg',
      category: 'expert',
      onfire: true
    }, {
      id: 2,
      title: 'Doña Skala',
      description: 'Hidratación y brillo para cabellos lisos u ondulados',
      price: 700,
      quantity: 1,
      image: './images/cremas/Dona Skala.jpg',
      category: 'expert',
      onfire: false
    }, {
      id: 3,
      title: 'Babosa',
      description: 'Hidratación profunda para cabellos rizados',
      price: 700,
      quantity: 1,
      image: './images/cremas/Babosa.jpg',
      category: 'expert',
      onfire: false
    }, {
      id: 4,
      title: 'Jaborandi',
      description: 'Hidratación y sorprendete fuerza para cabellos débiles',
      price: 700,
      quantity: 1,
      image: './images/cremas/Jaborandi.jpg',
      category: 'expert',
      onfire: false
    }, {
      id: 5,
      title: 'Poción Divina',
      description: 'Hidratación, brillo y antifrizz. Aceites, keratina y colágeno',
      price: 700,
      quantity: 1,
      image: './images/cremas/Divino Potão.jpg',
      category: 'potão',
      onfire: false
    }, {
      id: 6,
      title: 'Poción Divina Kids',
      description: 'Acción desenredante para cabellos ondulados y rizados',
      price: 700,
      quantity: 1,
      image: './images/cremas/Divino Potinho.jpg',
      category: 'potão',
      onfire: false
    }, {
      id: 7,
      title: 'Poción Dormida',
      description: 'Cabellos hidratados, aliñados y sin frizz',
      price: 700,
      quantity: 1,
      image: './images/cremas/Potão Desmaiado.jpg',
      category: 'potão',
      onfire: false
    }, {
      id: 8,
      title: 'Poción de Amor',
      description: 'Revitalización y renovación para cabellos dañados',
      price: 700,
      quantity: 1,
      image: './images/cremas/Potão do Amor.jpg',
      category: 'potão',
      onfire: false
    }, {
      id: 9,
      title: 'Almidón de Maíz',
      description: 'Ultra reparación, fuerza y brillo para todo tipo de cabellos',
      price: 700,
      quantity: 1,
      image: './images/cremas/Amido de Milho.jpg',
      category: 'expert',
      onfire: false
    }, {
      id: 10,
      title: 'Spa Naturals',
      description: 'Activación de crecimiento y puntas hidratadas',
      price: 700,
      quantity: 1,
      image: './images/cremas/Spa Naturals.jpg',
      category: 'spa naturals',
      onfire: false
    }, {
      id: 11,
      title: 'Bomba de Vitaminas',
      description: 'Bomba de vitaminas para todo tipo de cabellos',
      price: 700,
      quantity: 1,
      image: './images/cremas/Bomba de Vitaminas.jpg',
      category: 'especials',
      onfire: false
    }, {
      id: 12,
      title: 'Brillo Increíble',
      description: 'Brillo increíble para todo tipo de cabellos',
      price: 700,
      quantity: 1,
      image: './images/cremas/Brilho Incrivel.jpg',
      category: 'especials',
      onfire: false
    }, {
      id: 13,
      title: 'Restauración Total',
      description: 'Restauración espectacular para todo tipo de cabellos',
      price: 700,
      quantity: 1,
      image: './images/cremas/Restauração Espectacular.jpg',
      category: 'especials',
      onfire: false
    }, {
      id: 14,
      title: 'Fuerza Extrema',
      description: 'Hidratación y fuerza extrema para cabellos rizados',
      price: 700,
      quantity: 1,
      image: './images/cremas/Força Extrema.jpg',
      category: 'especials',
      onfire: false
    }, {
      id: 15,
      title: 'Fuerza Sorprendente',
      description: 'Fuerza y control de grasa para todo tipo de cabellos',
      price: 700,
      quantity: 1,
      image: './images/cremas/Força Surpreendente.jpg',
      category: 'especials',
      onfire: false
    }, {
      id: 16,
      title: 'Aceite de Argon',
      description: 'Nutrición y revitalización para cabellos secos y opacos',
      price: 700,
      quantity: 1,
      image: './images/cremas/Óleo de Argon.jpg',
      category: 'spa naturals',
      onfire: false
    }, {
      id: 17,
      title: 'Aceite de Coco',
      description: 'Nutrición y revitalización profuda para cabellos secos y dañados',
      price: 700,
      quantity: 1,
      image: './images/cremas/Óleo de Coco.jpg',
      category: 'spa naturals',
      onfire: false
    }, {
      id: 18,
      title: 'Vinagre de Manzana',
      description: 'Brillo y reducción de porosidad para cabellos resecos y con frizz',
      price: 700,
      quantity: 1,
      image: './images/cremas/Vinagre de Maçã.jpg',
      category: 'spa naturals',
      onfire: false
    }, {
      id: 19,
      title: 'Arcilla Blanca',
      description: 'Brillo para cabellos secos y tratados químicamente',
      price: 700,
      quantity: 1,
      image: './images/cremas/Arguila Branca.jpg',
      category: 'spa naturals',
      onfire: false
    }, {
      id: 20,
      title: 'Mantega de Karité',
      description: 'Suavidad, sedosidad y brillo para cabellos resecos y fragiles',
      price: 700,
      quantity: 1,
      image: './images/cremas/Manteiga de Karité.jpg',
      category: 'spa naturals',
      onfire: false
    }, {
      id: 21,
      title: 'Cóctel Brasil',
      description: 'Nutrición y brillo con frutos del Amazonas',
      price: 700,
      quantity: 1,
      image: './images/cremas/Coquetel Brasil.jpg',
      category: 'brasil',
      onfire: false
    }, {
      id: 22,
      title: 'Maracujá',
      description: 'Crecimiento y fuerza a base maracujá y aceites de patauá',
      price: 700,
      quantity: 1,
      image: './images/cremas/Brasil - Maracujá.jpg',
      category: 'brasil',
      onfire: false
    }, {
      id: 23,
      title: 'Mango',
      description: 'Nutrición y brillo a base mango y castañas del Pará',
      price: 700,
      quantity: 1,
      image: './images/cremas/Brasil - Manga.jpg',
      category: 'brasil',
      onfire: false
    }, {
      id: 24,
      title: 'Caju',
      description: 'Resistencia y brillo a base de caju y murumuru',
      price: 700,
      quantity: 1,
      image: './images/cremas/Brasil - Caju.jpg',
      category: 'brasil',
      onfire: false
    }, {
      id: 25,
      title: 'Café Verde',
      description: 'Vitalidad y brillo a base de café verde y aceite de Ucuuba',
      price: 700,
      quantity: 1,
      image: './images/cremas/Brasil - Café Verde.jpg',
      category: 'brasil',
      onfire: false
    }, {
      id: 26,
      title: 'Banana',
      description: 'Reparación y brillo a base de banana y bacuri',
      price: 700,
      quantity: 1,
      image: './images/cremas/Brasil - Banana.jpg',
      category: 'brasil',
      onfire: false
    }
  ]
}

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

mercadopago.configurations.setAccessToken('TEST-8406703159152890-042221-c4aa848274bd3dcf8cb9a713979a148f-747057913')

app.get('/', (request, response) => {
  response.json(data)
})

app.post('/create_preference', (req, res) => {
  const preference = {
    items: [{
      title: req.body.description,
      unit_price: Number(req.body.price),
      quantity: Number(req.body.quantity)
    }],
    back_urls: {
      success: 'http://localhost:8080/feedback',
      failure: 'http://localhost:8080/feedback',
      pending: 'http://localhost:8080/feedback'
    },
    auto_return: 'approved'
  }

  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.json({ id: response.body.id })
    }).catch(function (error) {
      console.log(error)
    })
})

app.get('/feedback', function (request, response) {
  response.json({
    Payment: request.query.payment_id,
    Status: request.query.status,
    MerchantOrder: request.query.merchant_order_id
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('API SKALA Ecommerce is ready, by Lukway')
})
