import ListGroup from './components/ListGroup';

function App() {
  const cities = ['New York', 'San Francisco', 'London', 'Paris'];
  const handleSelectItem = (item: string) => {
    console.log(item);
    document.title = `Selected: ${item}`;
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
