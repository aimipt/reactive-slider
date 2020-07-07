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
        theme: "light",
        title: "Title random 1",
        alt: "Alt text 1",
        video: "https://video-atl3-1.cdninstagram.com/v/t50.2886-16/106875667_658798774978543_5671373877917205526_n.mp4?_nc_cat=102&vs=18109725682192620_1488980524&_nc_vs=HBkcFQAYJEdCUExYZ2J2Qi1hS0xGY0NBQlpFcjJWX3hMUk9ia1lMQUFBRhUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAGAAW2IXxmeKsq0AVAigCQzMsF0AqiDEm6XjVGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MC5mZWVkIn0%3D&_nc_ohc=PJEJK1PMPJIAX9n980i&_nc_ht=video-atl3-1.cdninstagram.com&oh=321bd51556b41e1fe2739fdaec50a8b9&oe=5F28A4E8&_nc_rid=d3e0a062d8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        style: {backgroundColor: "#f5cab9"},
        styleBlur: {image: "/static/img/ads/photoVideo.jpg"},
        styleVideo: {borderRadius: 3}
    },
    {
        component: (
            <SlideTemplate slide={{title: "Title random 2", alt: "Alt text 2", image: "/static/img/ads/photoVideo.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", style: {background: "linear-gradient(90deg, #1d7d70 0%, #1b9887 50%)"}, styleImage: {borderRadius: 3}}}/>
        )
    },
    {
        title: "Title random 3",
        alt: "Alt text 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        style: {background: "linear-gradient(90deg, #5e3084 0%, #2fad7e 85%)"},
        styleBlur: {image: "/static/img/ads/photoVideo.jpg"}
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
| style       | `object`  |      `none`      | Styles for slide container                                                                              |
| styleImage       | `object`  |      `none`      | Styles for image                                                                             |
| styleVideo       | `object`  |      `none`      | Styles for video                                                                               |
| styleBlur       | `object`  |      `none`      | Styles for blur object                                                                               |


## Made by Wescale team
- Site: [wescale.ru](wescale.ru)
- Email: info@wescale.ru
- CEO: Alex Neverov (inst @neverovvv, telegram @neverovvvv)
- Address: Moscow, Leninsky Prospect apt. 42
