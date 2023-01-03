<style>
    html {
        font-family: Arial, Helvetica, sans-serif;
    }

    table {
        width: 100%;
        border: 1px solid #dddddd;
        border-spacing: 0px;
    }

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    .total {
        background-color: red;
    }

    tr:nth-child(even) {
        /* background-color: #dddddd; */
        border: 1px solid white;
    }

    .title {
        text-align: center;
        vertical-align: middle;
    }

    .middle {
        text-align: center;
        padding: 10px 0px;
        font-size: 12px;
        vertical-align: middle;
    }

    p,
    .mb-0 {
        padding: 0px;
        padding-bottom: 0px;
        margin: 0px;
    }

    .text-right {
        position: absolute;
        right: 0px;
        width: 300px;
        /* border: 3px solid #73AD21; */
        text-align: right;
        padding: 10px;
        top: 0px;
    }

    .light-brown {
        background-color: #e7e6e6;
    }

    .center {
        display: block;
        margin-left: 400px;
        margin-right: auto;
        width: 20%;
    }

    .center-text {
        display: flex;
        justify-content: center;
        align-content: center;
        margin: auto;
    }

    .green {
        color: #2ECC71 !important;
    }

    .orange {
        color: #F39C12 !important;
    }

    .red {
        color: #F31414 !important;
    }
</style>

<html>

<body>
    <center>
        <img src="http://stats.cultura.gob.sv/img/cultura_logo.jpg" alt="" width="20%">
    </center>
    <center>
        <p style="padding: 0px; margin-bottom: 10px; margin-top:10px">
            <b style="text-transform: uppercase">MINISTERIO DE CULTURA</b>
        </p>
        <p style="padding: 0px; margin-bottom: 10px; margin-top:10px">
            <b style="text-transform: capitalize">Dirección General de Planificación y Desarrollo Institucional</b>
        </p>
        <p style="padding: 0px; margin-bottom: 15px; margin-top:10px">
            <span style="text-transform: capitalize">Avance de Resultados y Acciones - Plan Cuscatlán</span>
        </p>
        <p style="padding: 0px; margin-bottom: 15px; margin-top:10px">
            <b style="text-transform: uppercase">{{ $axis_title }}</b>
        </p>
    </center>

    <table id="myTable">
        <thead>
            <tr>
                <td align="center" style="text-transform: uppercase; text-align: center"> <b>N°</b> </td>
                <td colspan="1" style="text-transform: capitalize; text-align: center"> <b>Ejes</b></td>
                <td style="text-transform: capitalize; text-align: center"> <b>Resultado</b></td>
                <td style="text-transform: capitalize; text-align: center"> <b>Acción</b></td>
                <td style="text-align: center"><b>Número de Acciones Anuales</b> </td>
                <td style="text-transform: capitalize; text-align: center"> <b>Avance</b></td>
                <td style="text-transform: capitalize; text-align: center"> <b>Porcentaje de avance</b> </td>
            </tr>
        </thead>
        @php
        $i = 1;
        @endphp
        <tbody>
            @foreach ($axis as $ax)
            <tr>
                <td style="text-align: center; width: 10%">
                    {{$ax->results_id}}
                </td>
                <td rowspan="1" style="width: 20%;">{{ $ax->axis_description}}</td>
                <td style="width: 20%;">{{ $ax->result_description}}</td>
                <td style="width: 20%;">{{ $ax->action_description}}</td>
                <td style="text-align: center; width: 10%"><b>{{ $ax->year_goal_actions}}</b></td>
                <td style="text-align: center; width: 10%"><b>{{$ax->annual_actions}}</b></td>
                <td style="text-align: center; width: 10%"
                    class="<?php if($axis_per == 100.00){ echo 'green';} if($axis_per >= 0.00 && $axis_per <= 49.99){ echo 'red';} if($axis_per >= 50.00 && $axis_per <= 99.99){ echo 'orange';}?>">
                    <b>{{$axis_per}}%</b>
                </td>
                @php
                $i++;
                @endphp
            </tr>
            @endforeach
        </tbody>
    </table>
</body>

</html>