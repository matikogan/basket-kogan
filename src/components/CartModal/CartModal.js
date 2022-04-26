import { Dialog } from "@mui/material";

const CartModal = ({handleClose, open , children}) => {
    return (
        <div>
            <Dialog onClose={handleClose} open={open} maxWidth='md'>
                {children}
            </Dialog>
        </div>
    )
}

export default CartModal;