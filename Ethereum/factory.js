import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xa3f3B64b5357084E4FC8A12Cab3F8483fE35eb78'
);

export default instance;