import React, { FC, ReactNode, CSSProperties, HTMLProps } from 'react';
import Card, { CardContent, Props as CardProps } from '../Card/Card';
import styled from '@emotion/styled';
import { PropsOf } from '@emotion/react';

export type Column = {
  dataIndex: string;
  title: string;
  className?: string;
  width?: number;
  maxWidth?: number;
  minWidth?: number;
  style?: CSSProperties;
  cellStyles?: CSSProperties;
  withoutHeader?: boolean;
  render?: (value: any, all: any) => ReactNode;
};

type DataType = Record<string, any>;

type Props = PropsOf<'table'> & {
  columns: Column[];
  cardProps?: Omit<CardProps, 'children'>,
  dataset: DataType[];
  appendToCard?: ReactNode;
  spacing?: 'sm' | 'md' | 'lg';
  stickyHeader?: boolean;
  withoutHeader?: boolean;
  onRowClick?: (row: DataType) => void;
  texts?: {
    noData: string
  };
}

const Table: FC<Props> = ({
  spacing = 'md',
  cardProps,
  appendToCard,
  stickyHeader,
  columns,
  texts,
  dataset,
  onRowClick,
  withoutHeader,
  ...rest
}) => {
  const renderValue = (column: Column, row: DataType) => {
    if (column.render) {
      return column.render(row[column.dataIndex], row);
    }

    return row[column.dataIndex];
  }

  const table = (
    <Root
      {...rest}
      spacing={spacing}
      clickable={!!onRowClick}
    >
      {!withoutHeader &&
        <thead className={stickyHeader ? 'sticky' : undefined}>
          <tr>
            {columns.map(column => (
              <th
                key={column.dataIndex}
                className={column.className}
                style={{
                  width: column.width,
                  maxWidth: column.maxWidth,
                  minWidth: column.minWidth,
                  ...column.style,
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
      }
      <tbody>
        {!dataset.length && (
          <tr className="table-empty">
            <td className="table-empty" colSpan={columns.length}>
              {texts ? texts.noData : 'No data'}
            </td>
          </tr>
        )}

        {dataset.map((row, index) => {
          return (
            <tr key={index} onClick={onRowClick ? () => onRowClick(row) : undefined}>
              {columns.map((column) => {
                return (
                  <td key={`d${index}c${column.dataIndex}`} style={column.style}>
                    <div className="cell-content" style={column.cellStyles}>
                      {renderValue(column, row)}
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Root>
  );

  if (!cardProps) {
    return table;
  }

  return (
    <Card {...cardProps} spacing={cardProps.spacing || spacing}>
      <CardContent style={{padding: 0}}>
        {table}
      </CardContent>
      {appendToCard}
    </Card>
  );
}

const Root = styled.table<Pick<Props, | 'spacing'> & {clickable: boolean}>`
  width: 100%;
  margin: 0;
  border-collapse: collapse;

  thead th,
  tbody td {
    padding: ${props => props.theme.space[props.spacing]/1.5}px ${props => props.theme.space[props.spacing]}px;
    border: 0;
    background-color: none;
  }

  thead {
    &.sticky {
      position: sticky;
      top: 0;
      z-index: 10;
    }

    th {
      text-align: left;
      background-color: ${props => props.theme.color.surface};
      border-bottom: 1px solid ${props => props.theme.color.contrast};
      font-size: ${props => props.theme.fontSize.md}px;
      font-weight: ${props => props.theme.fontWeight.heavy};
      color: ${props => props.theme.color.heading};
    }
  }

  tbody {
    tr {
      transition: background-color ${props => props.theme.speed}s;
      cursor: ${props => props.clickable ? 'pointer' : undefined};

      &:not(.table-empty):hover {
        background-color: ${props => props.theme.color.surface};
      }

      td {
        border-bottom: 1px solid ${(props) => props.theme.color.contrast};
        font-size: ${(props) => props.theme.fontSize.md}px;
        font-weight: ${(props) => props.theme.fontWeight.normal};
        transition: background-color ${props => props.theme.speed}s;

        .cell-content {
          display: flex;
          align-items: center;

          > svg {
            height: 24px;
          }
        }

        &.table-empty {
          color: ${(props) => props.theme.color.text};
        }
      }

      &:hover td {
        background-color: ${props => props.clickable ? props.theme.color.surfaceContrast : undefined};
      }

      &:last-of-type {
        td {
          border-bottom: 0;
        }
      }
    }
  }
`;


export default Table;