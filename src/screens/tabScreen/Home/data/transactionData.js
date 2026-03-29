import IconModule from '../../../../assets/icon';

export const transactionData = () => {
  return [
    {
      id: '1',
      title: 'Top Up',
      color: '#E7F5FD',
      day: 'Yesterday',
      amount: '100.000',
      image: IconModule.TopUp,
    },
    {
      id: '2',
      title: 'Cashback',
      color: '#F5E8F9',
      day: 'Sep 11',
      amount: '100.000',
      image: IconModule.Reward,
    },
    {
      id: '3',
      title: 'Withdraw',
      color: '#E7F5FD',
      day: 'Sep 12',
      amount: '100.000',
      image: IconModule.Withdraw,
    },
    {
      id: '4',
      title: 'Transfer',
      color: '#EDEBFF',
      day: 'Yesterday',
      amount: '100.000',
      image: IconModule.Send,
    },
    {
      id: '5',
      title: 'Electric',
      color: '#E7F5FD',
      day: 'Yesterday',
      amount: '100.000',
      image: IconModule.Shopping,
    },
  ];
};
