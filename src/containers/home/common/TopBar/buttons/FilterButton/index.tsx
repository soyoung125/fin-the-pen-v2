import { useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RoundedButton from '../../../../../../component/common/RoundedButton';

function FilterButton() {
    const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
    // const filtered = useSelector(selectFiltered);
    // const filteredDate = useSelector(selectFilteredDate);
    const [error, setError] = useState(false);
    // const {
    //     modalOpen: alertModalOpen,
    //     openModal: openAlertModal,
    //     closeModal: closeAlertModal
    // } = useModal();
    // const FIXEDEXPENDITURE = {
    //     ...FIXED,
    //     nested: FIXED.nested.filter((c) => c.type === '출금'),
    // };

    return (
        <>
            <RoundedButton value="user" onClick={() => setBottomDrawerOpen(true)}>
                {/* <FilterAltIcon /> */}
                <FilterAltOutlinedIcon />
            </RoundedButton>

            {/* Drawer 추가 */}
        </>
    );
}
export default FilterButton;
