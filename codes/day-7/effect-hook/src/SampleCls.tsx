import { Component, type ReactNode } from "react";

type StateType = {
    count: number,
    name: string
}
type PropType = {
    message: string
}
class SampleCls extends Component<PropType, StateType> {
    constructor(props: Readonly<PropType>) {
        super(props)
    }
    //state must be assigned to an object
    //only one state is possible
    state: Readonly<StateType> = {
        count: 0,
        name: 'anil'
    }
    //Called to determine whether the change in props and state should trigger a re-render.
    //Not called for the initial render.
    shouldComponentUpdate(nextProps: Readonly<PropType>, nextState: Readonly<StateType>, nextContext: any): boolean {
        // if (this.props.message === nextProps.message) {
        //     return false
        // }
        // if (this.state.count === nextState.count) {
        //     return false
        // }
        return true
    }
    render(): ReactNode {
        console.log(this.props.message);
        return (
            <div>
                Count:&nbsp;{this.state.count}
            </div>
        )
    }

    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(): void {
        //fetch data only one time during the lifecycle of the component instance and then re-set the state to cause re-render
        //this.setState({ count: 10, name: 'joydip' })
        this.setState(
            (currentState) => {
                return {
                    count: currentState.count + 1,
                    name: 'joydip'
                }
            }
        )       
    }

    //Called immediately after updating occurs. 
    // Not called for the initial render.
    componentDidUpdate(prevProps: Readonly<PropType>, prevState: Readonly<StateType>, snapshot?: any): void {
        //fetch data over and agin during the lifecycle of the component instance and then re-set the state to cause re-render
        //careful about the infinite re-render
        //control this method execution 
        /**
         * this.setState(
            (currentState) => {
                return {
                    count: currentState.count + 1,
                    name: 'joydip'
                }
            }
        )
         */
        
    }
}
export default SampleCls

/**
 * class Component<{},{}>{
 * state:Readonly<{}>;
 * props:Readonly<{}>;
 * constructor(props:Readonly<{}>){
 *  this.state={}
 *  this.props = props
 * }
 * render():ReactNode{
 * }  
 * }
 */