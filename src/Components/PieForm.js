import React, { useState } from 'react';
import './PieForm.css';
import { Form, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';

export default function PieForm() {

    const chartTypes = ['bvg', 'lc', 'p'];

    const [ dataLabels, setDataLabels ] = useState(['Hello', 'World']);
    const [ dataValues, setDataValues ] = useState([50, 50]);
    const [ chartType, setChartType ] = useState('bvg');
    const [ width , setWidth ] = useState(700);
    const [ height, setHeight ] = useState(100);

    const [fields, setFields] = useState([0, 1]);

    let imgSrc = `https://image-charts.com/chart`
            + `?cht=${chartType}`
            + `&chs=${width}x${height}`
            + `&chd=t:${dataValues.join(',')}`
            + `&chl=${dataLabels.join('|')}`;


    const handleDataChange = (data, value) => {

        const [ dataType, dataIndex ] = data.split('-');
        const setter = ( dataType === 'data' )
            ? setDataLabels
            : setDataValues;

        if (!value) {
            if (dataType === 'data') { value = dataLabels[dataIndex] }
            else { value = dataValues[dataIndex] }
        }

        setter( prev => {
            let newData = [...prev];
            newData[dataIndex] = value;
            return newData;
        })
    }
    
    const downloadChart = () => {
        axios({
            url: `${imgSrc}`,
            method: 'GET',
            responseType: 'blob'
        })
        .then( res => {
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'image.png');
            document.body.appendChild(link);
            link.click();

        })
    };

    const dataFields = fields.map(field => {
        return (
        <div className="row justify-content-between">
            <div class="form-field col-md-6">
                <input className="input-text js-input" id={`data-${field}`} name={`data-${field}`} placeholder={dataLabels[field]} required/>
                <label className="label" for={`data-${field}`}>Data</label>
            </div>
            <div class="form-field col-md-6">
                <input className="input-text js-input" id={`value-${field}`} name={`value-${field}`} placeholder={dataValues[field]} required/>
                <label className="label" for={`value-${field}`}>Value</label>
            </div>  
        </div>
        );
    })


    return (
        <section className="form-container container">
            <h1 className="title">Create your chart</h1>

            <h2>Chart type:</h2>
            <div className="chart-type">
                <Form.Control as="select" style={{ fontSize: '1.5rem', alignText: 'center'}} onChange={ e => {
                    setChartType(chartTypes[e.target.options.selectedIndex]);
                }}>
                    <option>Bar</option>
                    <option>Line</option>
                    <option>Pie</option>
                </Form.Control>
            </div>

            <form className="container form-container contact-form">

                <div id="data" onBlur= { e => {
                    handleDataChange(e.target.name, e.target.value);
                }}>
                    {dataFields}
                </div>
                
                <div class="form-field col-lg-12">
                    <Button className="submit-btn" onClick={ e => {
                        setFields(prev => [...prev, Math.max(...fields) + 1])
                    }}>Add field</Button>
                </div> 

                <div className="row justify-content-between" >
                    <div class="form-field col-lg-6 ">
                        <input id="height" class="input-text js-input" placeholder={height} required onBlur={ e => {
                            if (e.target.value) { setHeight(e.target.value) }
                        }}/>
                        <label class="label" for="height">Height(px)</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="width" class="input-text js-input" placeholder={width} required onBlur={ e => {
                            if (e.target.value) { setWidth(e.target.value) }
                        }}/>
                        <label class="label" for="width">Width(px)</label>
                    </div>
                </div>
            </form>

            <div className="img-container">
                <img src={imgSrc} alt="chart"></img>

            </div>
            <div class="container contact-form">
                <div class="row get-row">
                    <div class="col-md-2 align-self-center secondary-text" style={{
                        fontSize: '1.5rem'
                    }}>Link: </div>
                    <div class="col-md-10">
                        <FormControl
                        readOnly
                        type="text"
                        value={imgSrc}
                        />
                    </div>
                </div>

                <div class="row get-row justify-content-around">
                    <Button className="submit-btn col-md-3" style={{ minWidth: '400px'}} onClick={() => downloadChart() }>
                        Download
                    </Button>
                </div>
                
            </div>
            
        </section>
    )
}
