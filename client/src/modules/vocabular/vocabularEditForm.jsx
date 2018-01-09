import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import SortableTree, { changeNodeAtPath } from 'react-sortable-tree';
import { TextField } from './../form/form';
import { required } from './../form/validators';
import { vocabularCreate } from './_actions/vocabularActions';

class VocabularEditForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);

    this.state = {
      treeData: [
        {
          name: 'Boxes',
          price: 123,
          children: [
            { name: 'Plastic boxes' },
            { name: 'Wood boxes' }],
        },
        {
          name: 'Cables',
          children: [{ name: 'Egg' }],
        },
      ],
    };
  }

  formSubmit(e) {
    e.preventDefault();

    const vocabular = {
      name: this.props.vocabularForm.values.name,
    };

    this.props.vocabularCreate(vocabular);
  }

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;

    return (
      <Form onSubmit={this.formSubmit}>
        <h5>Vocabular Edit</h5>
        <Field
          name="name"

          type="text"
          placeholder="Vocabular name"
          component={TextField}
          validate={[required]}
        />

        <div style={{ height: 300 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}

            generateNodeProps={o => (
              console.log(o)
            )}

            generateNodeProps_={({ node, path }) => ({
              title: (
                <input
                  style={{ fontSize: '1.1rem' }}
                  value={node.name}
                  onChange={(event) => {
                    const name = event.target.value;

                    this.setState(state => ({
                      treeData: changeNodeAtPath({
                        treeData: state.treeData,
                        path,
                        getNodeKey,
                        newNode: {
                          ...node,
                          name,
                        },
                      }),
                    }));
                  }}
                />
              ),
            })}
          />
        </div>

        <pre>
          {JSON.stringify(this.state.treeData, 0, 2)       }
        </pre>

        <Button
          type="submit"
          color="primary"
          disabled={this.props.vocabularForm && {}.hasOwnProperty.call(this.props.vocabularForm, 'syncErrors')}
        >Save
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  vocabularForm: state.form.vocabular,
});

const mapDispatchToProps = dispatch => ({
  vocabularCreate: vocabular => dispatch(vocabularCreate(vocabular)),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'vocabular' }),
)(VocabularEditForm);
