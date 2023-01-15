## Injecting _react_ library via CDN:

```javascript
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

Browser console:

![image info](../../assets/images/chapter_01_inception/img.png)

## Using _props_ on createElement():

```javascript
const heading = React.createElement(
    "h1",
    {
        id: "heading",
        class: "someClass",
    },
    "Namaste React !"
);
```

![image info](../../assets/images/chapter_01_inception/img_1.png)

## _render()_ method behavior:

![image info](../../assets/images/chapter_01_inception/img_2.png)

Output:

![image info](../../assets/images/chapter_01_inception/img_3.png)

## Append multiple children:

```javascript
const div = React.createElement(
    "div",
    {
        id: "heading2",
    },
    [heading1, heading2]
);
```

Output:

![image info](../../assets/images/chapter_01_inception/img_4.png)

<br/>
<br/>
<br/>
<br/>

















