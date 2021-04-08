$(document).ready( function () {

    fetch()

    function fetch(){
        let url = "https://covid19.mathdro.id/api"

        let data = ''

        $.get(url, function (data){

            console.log(data.confirmed);
            console.log(data.recovered);
            console.log(data.deaths);

            data = `
            <td>${data.confirmed.value}</td>
            <td>${data.recovered.value}</td>
            <td>${data.deaths.value}</td>

            `

            $("#data").html(data)
        })
    }

    fetch1()

    function fetch1(){
        let url = "https://covid19.mathdro.id/api/countries/Indonesia"

        let dataindonesia = ''

        $.get(url, function (dataindonesia){

            console.log(dataindonesia.confirmed);
            console.log(dataindonesia.recovered);
            console.log(dataindonesia.deaths);

            dataindonesia = `
            <td>${dataindonesia.confirmed.value}</td>
            <td>${dataindonesia.recovered.value}</td>
            <td>${dataindonesia.deaths.value}</td>

            `

            $("#dataindonesia").html(dataindonesia)
        })
    }

    fetch2()

    function fetch2(){
        let url = "https://covid19.mathdro.id/api/countries/thailand"

        let datathailand = ''

        $.get(url, function (datathailand){

            console.log(datathailand.confirmed);
            console.log(datathailand.recovered);
            console.log(datathailand.deaths);

            datathailand = `
            <td>${datathailand.confirmed.value}</td>
            <td>${datathailand.recovered.value}</td>
            <td>${datathailand.deaths.value}</td>

            `

            $("#datathailand").html(datathailand)
        })
    }

    fetch3()

    function fetch3(){
        let url = "https://covid19.mathdro.id/api/countries/laos"

        let datalaos = ''

        $.get(url, function (datalaos){

            console.log(datalaos.confirmed);
            console.log(datalaos.recovered);
            console.log(datalaos.deaths);

            datalaos = `
            <td>${datalaos.confirmed.value}</td>
            <td>${datalaos.recovered.value}</td>
            <td>${datalaos.deaths.value}</td>

            `

            $("#datalaos").html(datalaos)
        })
    }

    fetch4()

    function fetch4(){
        let url = "https://covid19.mathdro.id/api/countries/vietnam"

        let datavietnam = ''

        $.get(url, function (datavietnam){

            console.log(datavietnam.confirmed);
            console.log(datavietnam.recovered);
            console.log(datavietnam.deaths);

            datavietnam = `
            <td>${datavietnam.confirmed.value}</td>
            <td>${datavietnam.recovered.value}</td>
            <td>${datavietnam.deaths.value}</td>

            `

            $("#datavietnam").html(datavietnam)
        })
    }

    fetch5()

    function fetch5(){
        let url = "https://covid19.mathdro.id/api/countries/brunei"

        let databrunei = ''

        $.get(url, function (databrunei){

            console.log(databrunei.confirmed);
            console.log(databrunei.recovered);
            console.log(databrunei.deaths);

            databrunei = `
            <td>${databrunei.confirmed.value}</td>
            <td>${databrunei.recovered.value}</td>
            <td>${databrunei.deaths.value}</td>

            `

            $("#databrunei").html(databrunei)
        })
    }

})