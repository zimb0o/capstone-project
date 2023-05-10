export default function SpotForm({ addSpot, spot }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
  }
return (
    <FormSection>
        <Form onSubmit={handleSubmit}
    </FormSection>
)
}
