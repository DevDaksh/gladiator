import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Slider from 'react-native-slider'
import { theme, config } from '../constants'
import { SliderLabel } from "./SliderLabel";
import { SliderComp } from "./slider";

const Lumpsum = (props) => {


    return (
        <View>
               <SliderLabel
              value={props.investment.toFixed(0)}
              onChange={props.setInvestment}
              label="Monthly Investment"
              max={config.sliderMeasures.maxInvestment}
              caption="Rs.">
            </SliderLabel>
            <SliderComp
              min={config.sliderMeasures.minInvestment}
              max={config.sliderMeasures.maxInvestment}
              value={props.investment} onChange={props.setInvestment}>
            </SliderComp>
            <SliderLabel
              value={props.period.toFixed(0)}
              label="Investment Period"
              caption="years"
              max={config.sliderMeasures.maxPeriod}
              onChange={props.setPeriod}>
            </SliderLabel>
            <SliderComp
              min={config.sliderMeasures.minPeriod}
              max={config.sliderMeasures.maxPeriod}
              value={props.period} onChange={props.setPeriod}>
            </SliderComp>
            <SliderLabel
              value={props.returns.toFixed(0)}
              label="Expected Returns (annual)"
              caption={"%"}
              max={config.sliderMeasures.maxReturn}
              
              onChange={props.setReturn}>
            </SliderLabel>
            <SliderComp
              min={config.sliderMeasures.minReturn}
              max={config.sliderMeasures.maxReturn}
              value={props.returns} onChange={props.setReturn}>
            </SliderComp>
          </View>
    );
};

const styles = StyleSheet.create({


});
export { Lumpsum };
