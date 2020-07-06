# Wescale slider
- 60fps
- pure React with no dependencies
- hooks
- production ready

## Live example
[wescale.ru/slider](https://wescale.ru/work/reactive_slider)


## Example

```jsx
import React from "react";

const slides = [
    {
        theme: "dark",
        title: "Title random 1",
        alt: "Alt text 1",
        video: "/static/img/ads/video8.mp4",
        description: "Lorem ipsum dolor sit amet, consectetur adi...",
        style: {backgroundColor: "#f5cab9"},
        styleVideo: {borderRadius: 10}
    },
    {.  // CUSTOM SLIDE EXAMPLE
        component: (
            <SlideTemplate slide={{title: "Title random 2", alt: "Alt text 2", image: "/static/img/ads/background2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adi...", style: {background: "linear-gradient(90deg, #1d7d70 0%, #1b9887 50%)"}, styleImage: {maxWidth: 400, borderRadius: 10}}}/>
        )
    },
    {
        title: "Title random 3",
        alt: "Alt text 3",
        description: "Lorem ipsum dolor sit amet, consectetur adi...",
        style: {background: "linear-gradient(90deg, #5e3084 0%, #2fad7e 85%)"}
    }
]

<ReactiveSlider slides={slides} 
                interval={10000} //in miliseconds
                withBullets 
                withButtonNext  
                height={450}/>
```


## ReactiveSlider Props

| Attributes          |    Type    |     Default      | Description                                                                                                                                          |
| :------------------ | :--------: | :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| slides           |  `array of objects`  |      `[]`      | Slides config                                                                                                       |
| interval           |  `number`  |      `10000`      | Action interval in miliseconds                                                                                   |
| height                |  `number`  | `450` | Height                                                                                                            |
| withBullets             | `boolean`  |      `false`      | Add bullets                                                                                   |
| withButtonNext       | `boolean`  |      `false`      | Add next button                                                                                 |




## Slides config

| Attributes          |    Type    |     Default      | Description                                                                                                                                          |
| :------------------ | :--------: | :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| component           |  `node`  |      `null`      | Slide as node component. All other options will ignored                                                                                                     |
| title           |  `string or node`  |      `null`      | Title                                                                                 |
| alt                |  `string or node`  | `null` | Alt text                                                                                                            |
| description             | `string`  |      `null`      | Description                                                                                |
| image       | `string`  |      `null`      | Image link                                                                          |
| video     | `string` |      `null`      | Video link                                                             |
| theme       | `string`  |      `light`      | Theme for elements (bullets, button, text color). Possible options: light or dark                                                                               |


## Made by Wescale team
- Site: [wescale.ru](wescale.ru)
- Email: info@wescale.ru
- CEO: Alex Neverov (inst @neverovvv, telegram @neverovvvv)
- Address: Moscow, Leninsky Prospect apt. 42
