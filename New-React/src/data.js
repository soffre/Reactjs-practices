import component from './assets/React-Components.jpg'
import jsx from './assets/learn-react-what-is-jsx.png'
import state from './assets/react-state.png'
import props from './assets/react-props.png'

export const CORE_CONCEPTS = [
    {
        title: "Components",
        description: "The core UI building block - compose the user interface by combining multiple components.",
        image:component
    },
    {
        title: "JSX",
        description: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered",
        image:jsx
    },
    {
        title: "Props",
        description: "Make componens configurable (and therefore reusable) by passing input data to them.",
        image:props
    },
    // {
    //     title: "State",
    //     description: "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    //     image:state
    // }
]

export const EXAMPLES = {
    component: {
        title: "Components",
        description: "Componenets are the building block of react applications. A component is a self-containd module (HTML + optionalCSS + JS)that renders some output.",
        code: `
        function Welcome() {
        return <h1>Hello, World!</h1>;
        }`
    },
    jsx:{
        title: "JSX",
        description: "JSX is asysnatx extension to javaScript. It is similar to atemplate language, but it has full power of javaScript (e.g., it may output dynamic content)",
        code: `
        <div>
            <h1> Welcome {userName}</h1>
            <p>Time to learn React!</p>
        </div>    `
    },
    props:{
        title: "Props",
        description: "Componenets accept arbitraty inputs called props. Theey are like function arguments.",
        code: `
        function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
        }`
    },
    state:{
        title: "State",
        description: "State allows React components to change their ouput over time in response to user actions, network responses, and anything else.",
        code: `
        function Counter() {
            const [isVisible, setIsVisible] = useState(false);

            function handleClick(){
                setIsVisible(true);
            }

            return <dev>
            if(setVisible === true){
            <h1>Hello, World!</h1>
          }else{
          <h1>please, first get visible by clicking the button, World!</h1>
          } </dev>;
        }`
    }
}