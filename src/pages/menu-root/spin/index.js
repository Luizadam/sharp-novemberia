import React from 'react';
import { Grid } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import WheelComponent from 'react-wheel-of-prizes';
import Swal from 'sweetalert2';
// import 'react-wheel-of-prizes/dist/index.css';
// import 'react-wheel-of-prizes/dist/index.css';

const SpinWhelee = () => {
    const router = useNavigate();
    const segments = ['Mesin Cuci', 'Motor', 'Mobil', 'Kipas Angin', 'Kompor', 'Kulkas', 'Dispenser', 'Magicom'];
    const segColors = ['#DD5353'];
    const onFinished = (winner) => {
        console.log(winner);
        Swal.fire('SELAMAT!!', 'Anda Mendapatkan Hadiah  ' + winner, 'success');
    };
    return (
        <div>
            <WheelComponent
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor="white"
                contrastColor="black"
                buttonText="Spin"
                isOnlyOnce={true}
                size={180}
                upDuration={700}
                downDuration={1000}
                fontFamily="Arial"
                style={{ marginLeft: '200px' }}
            />
        </div>
    );
};

export default SpinWhelee;
