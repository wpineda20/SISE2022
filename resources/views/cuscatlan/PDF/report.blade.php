<style>
    html {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px !important;
    }

    body {
        margin: 0cm 0.5cm
    }

    table {
        width: 100%;
        border: 1px solid #a19d9d;
        border-spacing: 0px;
    }

    td,
    th {
        border: 1px solid #a19d9d;
        text-align: left;
        padding: 8px;
    }

    .total {
        background-color: red;
    }

    tr:nth-child(even) {
        background-color: #e9e9e9;
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

    img {
        opacity: 0.5;
    }

    #watermark {
        position: fixed;

        /** Set an image position **/
        bottom: 7cm;
        left: 13cm;

        /** Image dimensions **/
        width: 13cm;
        height: 13cm;

        /** Set watermark behind every content **/
        z-index: -1000;

        /** Set image opacity **/
        opacity: 0.2;
    }
</style>

<html>

<body>
    <div id="watermark">
        <img src="logos/Escudo_D.png" height="100%" width="100%" />
    </div>
    <right>
        <img src="img/cultura_logo.jpg" alt="" width="20%" style="margin-left: 43rem;">
    </right>
    <center>
        <p style="padding: 0px; margin-top: -20px">
            <b style="text-transform: uppercase">MINISTERIO DE CULTURA</b>
        </p>
        <p style="padding: 0px; margin-top:10px">
            <b style="text-transform: capitalize">Dirección General de Planificación y Desarrollo Institucional</b>
        </p>
        <p style="padding: 0px; margin-bottom: 15px; margin-top:10px">
            <span style="text-transform: capitalize">Avance de Resultados y Acciones - Plan Cuscatlán</span>
        </p>
        <p style="padding: 0px; margin-bottom: 15px;">
            <b style="text-transform: uppercase">{{ $axis_title }}</b>
        </p>
    </center>

    @if($axis_title == "Avance por ejes")

    <table id="myTable">
        <thead>
            <tr>
                <td align="center" style="text-transform: uppercase; text-align: center"> <b>N°</b> </td>
                <td colspan="1" style="text-transform: capitalize; text-align: center"> <b>Ejes</b></td>
                <td style="text-align: center"><b>Número de Acciones Anuales</b> </td>
                <td style="text-transform: capitalize; text-align: center"> <b>Avance</b></td>
                <td style="text-transform: capitalize; text-align: center"> <b>Porcentaje de avance</b> </td>
            </tr>
        </thead>
        @php
        $i = 1;
        @endphp
        <tbody>
            @foreach($axis as $ax)
            <tr>
                <td rowspan="1" style=" text-align: center; width: 10%">{{ $i }}</td>
                <td rowspan="1" style=" text-align: left; width: 60%">{{ $ax->axis_description}}</td>
                <td style="text-align: center; width: 10%"><b>{{ $ax->sum_year_goals}}</b></td>
                <td style="text-align: center; width: 10%"><b>{{ $ax->sum_number_actions}}</b></td>
                <td style="text-align: center; width: 10%" class="
                    @php
                    if($ax->total_advanced_per == 100.00){ echo 'green';} 
                    if($ax->total_advanced_per >= 0.00 && $ax->total_advanced_per <= 49.99){ echo 'red';} 
                    if($ax->total_advanced_per >= 50.00 && $ax->total_advanced_per <= 99.99){ echo 'orange';}
                   @endphp
                    "><b>{{ number_format($ax->total_advanced_per, 2)}}%</b></td>
                @php
                $i++;
                @endphp
            </tr>
            @endforeach

        </tbody>
    </table>
    @else
    <table id="myTable">
        {{-- <thead> --}}
            <tr>
                <td colspan="1" style="text-transform: capitalize; text-align: center"> <b>Ejes</b></td>
                <td style="text-transform: capitalize; text-align: center"> <b>Resultado</b></td>
                <td style="text-transform: capitalize; text-align: center"> <b>Acción</b></td>
                <td style="text-align: center"><b>Número de Acciones Anuales</b> </td>
                <td style="text-transform: capitalize; text-align: center"> <b>Avance</b></td>
                <td style="text-transform: capitalize; text-align: center"> <b>Porcentaje de avance</b> </td>
            </tr>
            {{--
        </thead> --}}
        @php
        $i = 1;
        @endphp
        <tbody>
            @foreach ($axis as $ax) <tr>
                <td rowspan="1" style="width: 15%; text-align: center">{{ $ax->axis_description}}</td>
                <td style=" width: 25%;">{{ $ax->result_description}}</td>
                <td style="width: 30%;">{{ $ax->action_description}}</td>
                <td style="text-align: center; width: 10%"><b>{{ $ax->year_goal_actions}}</b></td>
                <td style="text-align: center; width: 10%"><b>
                        @php
                        foreach ($ax->trackings as $key => $value)
                        {
                        echo $value->number_actions;
                        $per_progress = $value->per_progress;
                        }
                        @endphp
                    </b></td>
                <td style="text-align: center; width: 5%" class="
                    @php
                    if($per_progress == 100.00){ echo 'green';} 
                    if($per_progress >= 0.00 && $per_progress <= 49.99){ echo 'red';} 
                    if($per_progress >= 50.00 && $per_progress <= 99.99){ echo 'orange';}
                   @endphp
                    ">
                    <b>
                        @php
                        foreach ($ax->trackings as $key => $value)
                        {
                        echo number_format($value->per_progress,2);
                        }
                        @endphp%
                    </b>
                </td>
                @php
                $i++;
                @endphp
            </tr>
            @endforeach
        </tbody>
    </table>
    @endif


</body>

</html>