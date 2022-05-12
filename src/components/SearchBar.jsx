import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 183px;
  background: #fff;
  z-index: 9999;
  opacity: 0;
  transition: all 0.4s ease 0.1s;

  &.searchClick {
    opacity: 1;
  }

  .container {
    padding: 25px 0;
  }

  .submit {
    padding-top: 25px;
    text-align: center;
    button {
      width: 147px;
      height: 37px;
      background: #ff7c98;
      color: #fff;
      font-size: 15px;
      line-height: 37px;
      border-radius: 18px;
      border: 0;
      cursor: pointer;
    }
  }

  table {
    th {
      text-align: left;
      font-size: 14px;
      color: #2f231c;
      font-weight: normal;
      padding: 8px 0 0 0;
      vertical-align: top;
      width: 88px;
    }

    td {
      vertical-align: top;

      select {
        width: 128px;
        height: 32px;
        background: #fff;
        border: 1px solid #d1cecc;
        border-radius: 4px;
        margin-right: 14px;
        padding: 0 1px 0 10px;
        font-size: 13px;
        color: #636363;
      }

      .categoryInput {
        width: 260px;
      }

      .hashtagInput {
        width: 540px;
      }

      .hashtag {
        display: inline-block;
        vertical-align: middle;
        margin: 10px 0 0 14px;
        dl {
          dt {
            color: #9c9c9c;
            margin-right: 10px;
          }
          dd {
            a {
              display: inline-block;
              color: #ff7c98;
              margin-right: 6px;
            }
          }
        }
      }

      .allergyContainer {
        width: 280px;
        .allergy {
          float: left;
          width: 70px;
          margin-top: 8px;
          cursor: pointer;

          input[type='checkbox'] + span {
            display: block;
            padding-left: 22px;
            background-image: url(https://www.baskinrobbins.co.kr/assets/images/search/bg_check_off.gif);
            background-repeat: no-repeat;
            color: #39261f;
            font-size: 13px;
            line-height: 17px;
          }

          input[type='checkbox']:checked + span {
            background-image: url(https://www.baskinrobbins.co.kr/assets/images/search/bg_check_on.gif);
          }
        }
      }
    }

    input[type='text'] {
      height: 32px;
      padding: 8px 1px 8px 10px;
      border: 0;
      background: #efefef;
      font-size: 13px;
      line-height: 16px;
      box-sizing: border-box;
    }
  }
`;

const SearchBar = ({ searchClick }) => {
  const {
    search: { category, allergy, hashtag },
  } = data;
  return (
    <SearchBarContainer className={searchClick && 'searchClick'}>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th>제품명</th>
              <td width={'482px'}>
                <select>
                  {category.map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
                <input type="text" className="categoryInput" />
              </td>
              <th>해시태그</th>
              <td width={'540px'}>
                <input type="text" className="hashtagInput" />
                <div className="hashtag">
                  <dl>
                    <dt>자주 찾는 해시태그</dt>
                    <dd>
                      {hashtag.map((v, i) => (
                        <Link to="/" key={i}>
                          #{v}
                        </Link>
                      ))}
                    </dd>
                  </dl>
                </div>
              </td>
            </tr>
            <tr>
              <th>알레르기 성분</th>
              <td colSpan="3">
                <div className="allergyContainer">
                  {allergy.map((v, i) => (
                    <label key={i} className="allergy">
                      <input type="checkbox" className="sr_only" />
                      <span>{v}</span>
                    </label>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="submit">
          <button className="submitBtn">검색</button>
        </div>
      </div>
    </SearchBarContainer>
  );
};

export default SearchBar;
