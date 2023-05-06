const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    const celTofah = (cel) => {
        let fahrenheit = Math.round((cel*9/5) + 32);
        return fahrenheit;
    }
    const fahTocel = (fahr) => {
        let celsius=Math.round((fahr-32) * 5/9);
        return celsius;
    }
    let result;
    if(valueTemp == 'cel'){
        result=celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML = result+"°F";
    }
    else{
        result = fahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = result+"°C";
    }
}