import Swal from 'sweetalert2'

export function customAlert(title, decription, type, next) {
    Swal.fire({
        title: title,
        text: decription,
        icon: type
    }).then(() => {
        if (next) {
            next();
        }
    });
}

export function toast(app, title, decription, type, next) {
    app.$toast.open({
        message: `<strong>${title}</strong> <br>${decription}`,
        text: decription,
        type: type,
        position: 'top-right'
    });

    if (next) {
        next();
    }

}

export function customAsk(title, decription, type, yes, no) {


    Swal.fire({
        title: title,
        text: decription,
        icon: type,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Yes',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            if (yes) {
                yes();
            }
        } else if (result.isDenied) {
            if (no) {
                no();
            }
        }
    })

}