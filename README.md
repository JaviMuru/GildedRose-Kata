# Gilded Rose Kata

Kata realizada en TypeScript aplicando los principios SOLID.

Las normas que rigen la aplicación son:

- Todos los ítems tienen una propiedad SellIn para indicar la cantidad de días que quedan para venderse.
- Todos los ítems tienen una propiedad Quality para indicar su estado actual.
- Al final de cada día, el sistema decrementa ambas propiedades para cada ítem.
- Si la cantidad de días para vender un ítem expira, su calidad decrecerá 2 veces más rápido.
- La calidad de un ítem nunca será negativa.
- Los ítems “Aged Brie” (Brie añejo), en realidad aumenta su calidad a más días transcurren.
- La calidad de un ítem no será nunca superior a 50
- Los ítems “Sulfuras”, que són legendarios, tienen una calidad constante de 80 y nunca deben venderse ya que entonces pierden calidad.
- Los ítems “Backstage passes”, al igual que el Brie Añejo, aumentan en calidad según se consume la propiedad SellIn: la calidad aumenta en 2 si quedan 10 días o menos, aumenta en 3 cuándo quedan 5 días o menos pero la calidad pasa inmediatamente a ser 0 una vez ya ha tenido lugar el concierto.
